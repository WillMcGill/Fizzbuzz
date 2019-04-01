

// const getGPA = function(grades){
    // var total = 0;
    // for (var i = 0; i < grades.length; i++){
    // total = total + grades[i];}

    // console.log(total)
    // const average = total / grades.length
    // console.log(average)
// }

// const grades = [4,3,3,2]

// getGPA(grades)

// for (i=0; i <= 10; i++) {
//     console.log(i)
// }

// if( i !== 3 || i !== 5) {
//     console.log('owejr')
// }

const fizzbuzz = function() {
    var count = 1;
    for (count; count <= 100; count++){
        
    
        if (count%5 == 0 && count%3 == 0){
            console.log('fizzbuzz')}
        
        else if (count%3 == 0){
            console.log('fizz')
        }

        else if (count%5 == 0){
            console.log('buzz')
        }
            
        

        
        else {
        console.log(count)
        }

        // if (count%3 ;  count%5 == 0){
        //     console.log('fizzbuzz')
        // }
    
    }

    
}



// if (count%3 == 0){
//     console.log('fizz')
// }

fizzbuzz()

