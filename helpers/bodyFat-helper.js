//const log = require('mathjs');

var container = {
    "calculateBodyFat" : function(neck, waist, hip, gender, height){
        /**
         * all parameters must be in cm
         */
        const maleArgument = waist - neck;
        const femaleArgument = waist + hip - neck;

        if(gender === 'male'){
            return 495 / (1.0324 - 0.19077 * (Math.log(maleArgument)) + 0.15456 * (Math.log(height))) - 450;
        } else if(gender === 'female'){
            return 495 / (1.29579 - 0.35004 * (Math.log(femaleArgument)) + 0.22100 * (Math.log(height))) - 450;
        }         
    }
}

module.exports = container;