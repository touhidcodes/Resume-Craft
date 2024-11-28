import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setActiveSections,
  updateActiveSection,
} from "../../redux/features/resume/resumeSlice";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

type TSection = {
  name: string;
  isActive: boolean;
};

const SectionSwitcher = () => {
  const dispatch = useAppDispatch();
  const allSections = useAppSelector(
    (state) => state.resume.resume.allSections
  );
  const [items, setItems] = useState<TSection[]>(allSections);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.name === active.id);
      const newIndex = items.findIndex((item) => item.name === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        setItems((prevItems) => {
          const newArr = arrayMove(prevItems, oldIndex, newIndex);
          dispatch(setActiveSections(newArr));
          return newArr;
        });
      }
    }
  };

  const handleChange = (section: TSection) => {
    dispatch(updateActiveSection(section));
  };

  useEffect(() => {
    setItems(allSections);
  }, [allSections]);

  return (
    <div className="mt-5">
      <div className="flex-1 flex justify-between items-center border border-[#ccc] p-2.5 mb-2 rounded">
        <h3 className="font-medium pl-10">{allSections[0].name}</h3>
        <button onClick={() => handleChange(allSections[0])}>
          <Switch
            checked={allSections[0].isActive}
            inputProps={{ "aria-label": "controlled" }}
          />
        </button>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map((item) => item.name)}
          strategy={verticalListSortingStrategy}
        >
          {items
            .filter((section) => section.name !== "Summary")
            .map((section) => (
              <Switcher
                key={section.name}
                section={section}
                onChange={handleChange}
              />
            ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

const Switcher = ({
  section,
  onChange,
}: {
  section: TSection;
  onChange: (section: TSection) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.name });

  // Styling for the dragged element to apply smooth transitions
  const style = {
    ...(transform
      ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
      : {}),
    transition,
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: isDragging ? "#f4f4f4" : "",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style }}
      className="flex justify-between items-center gap-x-2"
    >
      <button
        {...listeners}
        {...attributes}
        className="flex items-center py-1.5 px-1 cursor-grab"
      >
        <DragIndicatorIcon sx={{ color: "rgba(0, 0, 0, 0.5)" }} />
      </button>

      <div className="flex-1 flex justify-between items-center">
        <h3 className="font-medium">{section.name}</h3>
        <button onClick={() => onChange(section)}>
          <Switch
            checked={section.isActive}
            inputProps={{ "aria-label": "controlled" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionSwitcher;
