import { RecipesProvider } from "./RecipesContext";

export default function AppWrapper({ children }) {
    return (
        <RecipesProvider>
            {children}
        </RecipesProvider>
    )
}