
function GeneratePlan(athlete, exercise){
    
    let days = athlete.days_per_week;
    let level = athlete.level;
    let goal = athlete.goal;
    let sets = null;
    let reps = null;
    let rest = null;
    let gender = athlete.gender;

    const isolationExercises = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'isolation'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'isolation'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'isolation'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'isolation') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'isolation'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'isolation'),
        legsForWomen: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs' || x.muscles === 'glutes') && x.mechanicsType === 'isolation'),
    }
    const compoundExercises = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'compound'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'compound'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'compound'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'compound') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'compound'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'compound'),
    }
    const isolationExercisesForBeginner = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'isolation'  && x.level === 'beginner'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'isolation' && x.level === 'beginner') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'isolation'  && x.level === 'beginner'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        legsForWomen: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs' || x.muscles === 'glutes') && x.mechanicsType === 'isolation'),
    }
    const compoundExercisesForBeginner = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'compound' && x.level === 'beginner'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'compound' && x.level === 'beginner'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'compound' && x.level === 'beginner'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'compound' && x.level === 'beginner') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'compound'  && x.level === 'beginner'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'compound' && x.level === 'beginner'),
    }

    const stretchingExercises = exercise.filter(x => x.exerciseType === 'stretching');

    const cardioExercises = exercise.filter(x => x.exerciseType === 'cardio')
    let musclesPerDay = null;
    let exercisesNames = ['chest', 'back', 'shoulders', 'legs', 'triceps', 'biceps']

    HowManyMusclesPerDay(days);

    if(days == 2 || days == 3 || days == 6){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= days; i++){ 
            let dailyExercises = [];
            GetCardioExercise(i, dailyExercises)
            
            
                for(let k = 1; k <= musclesPerDay; k++){ // how many muscles per day
                    const tempExercise = exercisesNames[Math.floor(Math.random() * exercisesNames.length)] 
                    exercisesNames = exercisesNames.filter(x => x !== tempExercise);
                     if(k == 1) {
                         GetWarmUpExercise(stretchingExercises, dailyExercises);
                     }
                     HowManyExercisesPerMucle(tempExercise, dailyExercises)
                }
            workout.push({ day: i, exercises: dailyExercises })
        }
        return workout;
    } else if(days == 4){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= days; i++){ // Push an exercises to every day

            let dailyExercises = []; // Array of daily exercises
            if(i % 2 === 0){
                for(let k = 1; k <= 2; k++){ // How many muscles per day 
                    const tempExercise = exercisesNames[Math.floor(Math.random() * exercisesNames.length)] // get muscle name
                    exercisesNames = exercisesNames.filter(x => x !== tempExercise); // delete that muscle name from array 
            
                    for(let j = 1; j <= 3; j++){ // three exercises for every muscle
                        let isolation = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: isolation })
                    } 
                    for(let l = 1; l <= 1; l++){ // three exercises for every muscle
                        let compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: compound })
                    }
                }
            } else {
                for(let k = 1; k <= 1; k++){ // How many muscles per day 
                    const tempExercise = exercisesNames[Math.floor(Math.random() * exercisesNames.length)] // get muscle name
                    exercisesNames = exercisesNames.filter(x => x !== tempExercise); // delete that muscle name from array 
            
                    for(let j = 1; j <= 3; j++){ // three exercises for every muscle
                        let isolation = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: isolation })
                    } 
                    for(let l = 1; l <= 1; l++){ // three exercises for every muscle
                        let compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: compound })
                    }
                }
            }
                

            workout.push({ day: i, exercises: dailyExercises })
        }
        
        return workout;
    } else if(days == 5){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= days; i++){ // Push an exercises to every day

            let dailyExercises = []; // Array of daily exercises
            if(i === 1){
                for(let k = 1; k <= 2; k++){ // How many muscles per day 
                    const tempExercise = exercisesNames[Math.floor(Math.random() * exercisesNames.length)] // get muscle name
                    exercisesNames = exercisesNames.filter(x => x !== tempExercise); // delete that muscle name from array 
            
                    for(let j = 1; j <= 3; j++){ // three exercises for every muscle
                        let isolation = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: isolation })
                    } 
                    for(let l = 1; l <= 1; l++){ // three exercises for every muscle
                        let compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: compound })
                    }
                }
            } else {
                for(let k = 1; k <= 1; k++){ // How many muscles per day 
                    const tempExercise = exercisesNames[Math.floor(Math.random() * exercisesNames.length)] // get muscle name
                    exercisesNames = exercisesNames.filter(x => x !== tempExercise); // delete that muscle name from array 
            
                    for(let j = 1; j <= 3; j++){ // three exercises for every muscle
                        let isolation = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: isolation })
                    } 
                    for(let l = 1; l <= 1; l++){ // three exercises for every muscle
                        let compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
                        dailyExercises.push({ sets, reps, rest, exercise: compound })
                    }
                }
            }

            workout.push({ day: i, exercises: dailyExercises })
        }
        
        return workout;
    }

    function HowManyMusclesPerDay(day){
        switch(day){
            case 2:
                return musclesPerDay = 3;
            case 3:
                return musclesPerDay = 2;
            case 6:
                return musclesPerDay = 1;
        }
    }
    function HowManyExercisesPerMucle(tempExercise, dailyExercises){
        let isolation = null;
        let compound = null;
        if(gender === 'female'){
            if(days == 2){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 1;
                } else {
                    isolation = 2;
                    compound = 1;
                }
            } else if(days == 3){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 1;
                } else {
                    isolation = 2;
                    compound = 1;
                }
            } else if(days == 6){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 2;
                } else {
                    isolation = 2;
                    compound = 4;
                }
            }
        } else if(gender === 'male'){
            if(days == 2){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 1;
                } else {
                    isolation = 2;
                    compound = 1;
                }
            } else if(days == 3){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 1;
                } else {
                    isolation = 2;
                    compound = 1;
                }
            } else if(days == 6){
                if(level === 'beginner'){
                    isolation = 2;
                    compound = 2;
                } else {
                    isolation = 2;
                    compound = 4;
                }
            }
        }
        
        for(let j = 1; j <= isolation; j++){
            if(level === 'beginner'){
                GetIsolationExercise(tempExercise, isolationExercisesForBeginner, dailyExercises);
            } else {
                GetIsolationExercise(tempExercise, isolationExercises, dailyExercises);
            }
            
        } 
        for(let l = 1; l <= compound; l++){
            if(level === 'beginner'){
                GetCompoundExercise(tempExercise, compoundExercisesForBeginner, dailyExercises);
            } else {
                GetCompoundExercise(tempExercise, compoundExercises, dailyExercises);
            }
        }
    }


    function GetWarmUpExercise(stretchingExercises, dailyExercises){
        for(let i = 1; i <= 3; i++){
        let stretching = stretchingExercises[Math.floor(Math.random() * stretchingExercises.length)]
        dailyExercises.push({ exercise: stretching })
        }
    }

    function GetCardioExercise(thisDay, dailyExercises){
        let min = null;
        let cardio = null;
        if(level === 'beginner'){
            if(goal === 'lose fat'){
                min = 35;
                cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            } else if(goal === 'build muscle'){
                min = 15;
                BuildMuscleCardion(thisDay)
            } else if(goal === 'get stronger'){
                min = 20;
                GetStrongerCardio(thisDay)
            }
        } else if(level === 'intermediate'){
            if(goal === 'lose fat'){
                min = 45;
                cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            } else if(goal === 'build muscle'){
                min = 20;
                BuildMuscleCardion(thisDay)
            } else if(goal === 'get stronger'){
                min = 30;
                GetStrongerCardio(thisDay)
            }
        }
        function BuildMuscleCardion(day){
            if(day % 3 > 1){
                let cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            }
        }

        function GetStrongerCardio(day){
            if(day % 2){
                let cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            }
        }
        
    }
    
    function GetIsolationExercise(tempExercise, isolationExercises, dailyExercises){
        let isolation = null;
        if(tempExercise === 'legs' && gender === 'female'){
            isolation = isolationExercises['legsForWomen'][Math.floor(Math.random() * isolationExercises['legsForWomen'].length)]
        } else {
            isolation = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
        }
        if(level === 'beginner'){
            if(goal === 'lose fat'){
                sets = 3;
                reps = 12;
                rest = 45;
            } else if(goal === 'build muscle'){
                sets = 4;
                reps = 8;
                rest = 120;
            } else if(goal === 'get stronger'){
                sets = 3;
                reps = 10;
                rest = 90;
            }
        } else if(level === 'intermediate'){
            if(goal === 'lose fat'){
                sets = 3;
                reps = 15;
                rest = 45;
            } else if(goal === 'build muscle'){
                sets = 5;
                reps = 5;
                rest = 120;
            } else if(goal === 'get stronger'){
                sets = 4;
                reps = 8;
                rest = 90;
            }
        }
        return dailyExercises.push({ sets, reps, rest, exercise: isolation })
    }
    
    function GetCompoundExercise(tempExercise, compoundExercises, dailyExercises){
        let compound = null;
        if(tempExercise === 'biceps'){
            compound = isolationExercises['biceps'][Math.floor(Math.random() * isolationExercises['biceps'].length)]
        } else {
            compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
        }
        if(level === 'beginner'){
            if(goal === 'lose fat'){
                sets = 3;
                reps = 12;
                rest = 45;
            } else if(goal === 'build muscle'){
                sets = 4;
                reps = 8;
                rest = 120;
            } else if(goal === 'get stronger'){
                sets = 3;
                reps = 10;
                rest = 90;
            }
        } else if(level === 'intermediate'){
            if(goal === 'lose fat'){
                sets = 3;
                reps = 15;
                rest = 45;
            } else if(goal === 'build muscle'){
                sets = 5;
                reps = 5;
                rest = 120;
            } else if(goal === 'get stronger'){
                sets = 4;
                reps = 8;
                rest = 90;
            }
        }
        return dailyExercises.push({ sets, reps, rest, exercise: compound })
    }
}




module.exports = {GeneratePlan};