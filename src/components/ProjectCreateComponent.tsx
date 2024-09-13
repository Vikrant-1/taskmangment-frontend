// position

import React, { SetStateAction, useState } from "react";
import TextInput from "./TextInput";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

interface ProjectCreateComponentProps {
  isVisible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

function ProjectCreateComponent({
  isVisible,
  setVisible,
}: ProjectCreateComponentProps) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [teams, setTeams] = useState([]);
  const [showCalender, setShowCalender] = useState("NONE");

  const onChangeProjectName = (value: string) => {
    setProjectName(value);
  };

  const onChangeProjectDescription = (value: string) => {
    setDescription(value);
  };

  const onChangeStartDate = (value: Date) => {
    setStartDate(value);
    setShowCalender("NONE");
  };
  const onChangeEndDate = (value: Date) => {
    setEndDate(value);
    setShowCalender("NONE");
  };

  const handleCreateProject = () => {
    try {
    } catch (error) {}
  };

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setShowCalender("NONE");
      }}
      className="flex justify-center place-items-center absolute w-screen h-screen bg-[#00000009]"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          setShowCalender("NONE");
        }}
        className="bg-white shadow-xl p-10 rounded-md w-1/2"
      >
        <div className="flex place-items-center justify-between mb-6">
          <p className="text-2xl text-bold">Create Project</p>
          <IoMdClose
            className="cursor-pointer"
            size={30}
            onClick={(event) => {
              event.stopPropagation();
              setVisible(false);
            }}
          />
        </div>
        <TextInput
          label="Project Name"
          placeholder={"What is your project called?"}
          value={projectName}
          onChangeValue={onChangeProjectName}
        />
        <div className="flex justify-between">
          <div
            className="w-full"
            onClick={(event) => {
              event.stopPropagation();
              setShowCalender("START");
            }}
          >
            <TextInput
              label="Start Date"
              placeholder={""}
              value={startDate}
              readOnly={true}
              maxDate={new Date(endDate)}
              showCalender={showCalender === "START"}
              onChangeValue={onChangeStartDate}
              isCalender={true}
            />
          </div>
          <div className="w-10"></div>
          <div
            onClick={(event) => {
              event.stopPropagation();
              setShowCalender("END");
            }}
            className="w-full"
          >
            <TextInput
              label="End Date (Deadline)"
              placeholder={""}
              value={endDate}
              readOnly={true}
              minDate={new Date(startDate)}
              showCalender={showCalender === "END"}
              onChangeValue={onChangeEndDate}
              isCalender={true}
            />
          </div>
        </div>

        <div>
          <TextInput
            label="Notes"
            placeholder={"Describe the project (e.g., develop a new website)"}
            value={description}
            onChangeValue={onChangeProjectDescription}
            istextArea={true}
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button title="CREATE" onClick={handleCreateProject} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCreateComponent;
