import { useParams } from "react-router-dom";
import { getRecipe } from "../mockDB";

export default function Recipe() {
    const recipeId = useParams().id;
    const recipeData = getRecipe(recipeId);
    return (
        <div>
            Hier stehen alle Infos:
            --{recipeData.id}---
            --{recipeData.name}---
            --{recipeData.description}---
            --{recipeData.date}---
            --{recipeData.rating}---
        </div>
    )
}