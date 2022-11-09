export class Player  {
	"id": string
	"team_id": string | null
	"name": string
	"age": number
	"position": "Goalkeeper" | "Defender" | "Midfielder" | "Forward"
	"goals": number

	constructor(id: string, team_id: string, name: string, age: number, position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward", goals: number) {
		id = id;
		team_id = team_id;
		name = name;
		age = age;
		position = position;
		goals = goals;
	}
};