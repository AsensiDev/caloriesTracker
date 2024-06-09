import { Activity } from "../types"
import { useMemo } from "react"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 
    ? total + activity.calories
    : total, 0) , [activities])

    const caloriesBurn = useMemo(() => activities.reduce((total, activity) => activity.category === 2 
    ? total + activity.calories
    : total, 0) , [activities])

    const netCalories = useMemo(() => caloriesConsumed - caloriesBurn , [activities])

  return (
    
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay 
                calories={caloriesConsumed}
                text='Consumindas'
            />
            <CalorieDisplay 
                calories={caloriesBurn}
                text='Quemadas'
            />
            <CalorieDisplay 
                calories={netCalories}
                text='Global'
            />
            
        </div>
        
    </>
  )
}
