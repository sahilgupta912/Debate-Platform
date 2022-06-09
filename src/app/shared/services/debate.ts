import { Timestamp } from "@google-cloud/firestore";

export interface Debate {
    id:number;
    title:string;
    description:string;
    likes:number;
    contributions:number;
    initiatedBy:string;
    category:string;
    createdOn:Timestamp;
}
