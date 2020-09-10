var container = {
    "calculateBmi" : function(weight,height){
        /**
         * weight must be in kg
         * height must be in m
         */
        let heightInMeters = height / 100;

         var bmi = weight/(heightInMeters*heightInMeters);
         return bmi;    
    },

    "statusOnBmi" : function(bmi){
        if(bmi < 18.5)
            return 'Underweight';
        else if(bmi >= 18.5 && bmi <= 24.9)
            return 'Normal';
        else if(bmi >= 25 && bmi <= 29.9)
            return 'Overweight';
        else if(bmi >= 30)
            return 'Obese';
    }
}

module.exports = container;