import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateActiveSection } from "../../redux/features/resume/resumeSlice";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

type TSectionSwitcherProps = {
  section: TSection;
};

type TSection = {
  name: string;
  isActive: boolean;
};

const SectionSwitcher = () => {
  const resume = useAppSelector((state) => state.resume.resume);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState<TSection[]>(resume.allSections);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.name === active.id);
      const newIndex = items.findIndex((item) => item.name === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        setItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex));
      }
    }
  };

  const handleChange = (section: TSection) => {
    dispatch(updateActiveSection(section));
  };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map((item) => item.name)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((section) => (
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

  const style = {
    ...(transform
      ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
      : {}),
    transition,
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: isDragging ? "#d3d3d3" : "#f4f4f4",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "move",
  };

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onClick={() => onChange(section)}
      className="flex justify-between items-center w-full border-b py-1.5"
    >
      <h3 className="font-medium">{section.name}</h3>
      <Switch
        checked={section.isActive}
        inputProps={{ "aria-label": "controlled" }}
      />
    </button>
  );
};

export default SectionSwitcher;
