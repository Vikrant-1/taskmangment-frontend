// position

import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { createProjectApi } from "../services/projectApis";
import { getUnixTime } from "date-fns";
import { useSetRecoilState } from "recoil";
import { projectState } from "../store/projectAtoms";
import { zodProjectValidation } from "../zodValidation/zodProjectValidation";
import { toast } from "react-toastify";

function ProjectCreateComponent() {
  const setProject = useSetRecoilState(projectState);
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

  const handleCreateProject = async () => {
    try {
      const prepareData = {
        name: projectName,
        description: description,
        fromDate: getUnixTime(startDate),
        toDate: getUnixTime(endDate),
        teams: teams,
      };

      const zodCheck = zodProjectValidation.safeParse(prepareData);

      if (!zodCheck.success) {
        toast(zodCheck.error.message, { type: "error" });
        return;
      }

      const data = await createProjectApi(prepareData);
      if (data) {
        toast("Project created successfully!!", { type: "success" });
      }
      setProject(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast(error.message, { type: "error" });
      }
    }
  };

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        setShowCalender("NONE");
      }}
      className="bg-white shadow-xl p-10 rounded-md"
    >
      <div className="flex place-items-center justify-between mb-6">
        <p className="text-2xl text-bold">Create Project</p>
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
  );
}

export default ProjectCreateComponent;
