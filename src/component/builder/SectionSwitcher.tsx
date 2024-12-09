import { FormControlLabel } from "@mui/material";
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
import { Section } from "../../types/resumeTypes";
import { useUpdateResumeMutation } from "../../redux/features/resume/resumeApi";
import IOSSwitch from "../shared/IOSSwitch";

const SectionSwitcher = () => {
  const dispatch = useAppDispatch();
  const [manageSection, { isLoading }] = useUpdateResumeMutation();
  const resumeId = useAppSelector((state) => state?.resume.resume?.id);

  // Ensure fallback to empty array if no sections exist
  const allSections = useAppSelector(
    (state) => state?.resume?.resume?.allSection || []
  );

  // State for items, ensuring it's typed correctly
  const [items, setItems] = useState<Section[]>(allSections);

  // handleDragEnd type fix
  const handleDragEnd = async (event: any) => {
    try {
      const { active, over } = event;
      if (active.id !== over.id) {
        const oldIndex = items.findIndex((item) => item.name === active.id);
        const newIndex = items.findIndex((item) => item.name === over.id);
        if (oldIndex !== -1 && newIndex !== -1) {
          const newArr = arrayMove(items, oldIndex, newIndex);

          setItems(newArr);
          dispatch(setActiveSections(newArr));

          await manageSection({
            id: resumeId,
            data: { allSection: newArr },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Correct typing for handleChange
  const handleChange = async (section: Section) => {
    dispatch(updateActiveSection(section));
    const sections = allSections.map((item) =>
      item.name === section.name
        ? { ...item, isActive: !section.isActive }
        : item
    );

    await manageSection({
      id: resumeId,
      data: { allSection: sections },
    });
  };

  // Sync state items with allSections when it changes
  useEffect(() => {
    setItems(allSections);
  }, [allSections]);

  return (
    <div className="mt-5">
      <div className="flex-1 flex justify-between items-center border border-[#ccc] p-3.5 pr-0 mb-2 rounded">
        <h3 className="font-medium pl-10">{allSections[0]?.name}</h3>
        <button onClick={() => handleChange(allSections[0])}>
          <FormControlLabel
            label=""
            control={
              <IOSSwitch
                sx={{ marginRight: "-5px" }}
                disabled={isLoading}
                checked={allSections[0]?.isActive || false}
                onChange={() => handleChange(allSections[0])}
              />
            }
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
                isLoading={isLoading}
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

// Fixing Switcher's onChange
const Switcher = ({
  section,
  isLoading,
  onChange,
}: {
  section: Section;
  isLoading: boolean;
  onChange: (section: Section) => void;
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
      style={style}
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
        <button>
          <IOSSwitch
            checked={section.isActive}
            disabled={isLoading}
            onChange={() => onChange(section)}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionSwitcher;
