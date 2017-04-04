var family = [
    {
        name: 'Dor',
        age: 21,
        gender: 'male'
    },
    {
        name: 'Roi',
        age: 25,
        gender: 'male'
    }
]
    for(var person in family)
        {
            alert('The Name Is: '+family[person].name+'\nThe Age Is: '+family[person].age+'\nThe Gender Is: '+family[person].gender);
        }
