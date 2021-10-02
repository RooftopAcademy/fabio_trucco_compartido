import isCheckBoxChecked from "./isCheckBoxChecked";

export default function filterMultipleChecks(ids: string[]) : string[] {
   
    return ids.filter((id) => isCheckBoxChecked(id));

}