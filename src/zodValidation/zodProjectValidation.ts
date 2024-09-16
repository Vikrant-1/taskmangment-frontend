import zod from 'zod';
const projectName = zod.string({ message: 'Please enter project name' }).min(3,{message:"Project name must be 3 characters."});
const projectDescription = zod.string({ message: 'Please enter project notes' }).optional();
const fromDate = zod.number({ message: "Enter a valid project start time" });
const toDate = zod.number({ message: "Enter a valid project end time" });
const team = zod.array(zod.string(), { message: "Please enter a valid team Ids" });


export const zodProjectValidation = zod.object({
    name: projectName,
    description: projectDescription,
    teams: team.optional(),
    fromDate: fromDate,
    toDate:toDate
});
