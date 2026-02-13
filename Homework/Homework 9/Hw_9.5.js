let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesElement of coursesArray) {
    const divMain = document.createElement('div');
    divMain.classList.add('divMain')

    const divTittle = document.createElement('div');
    divTittle.innerText = coursesElement.title;
    divTittle.classList.add('divTittle');

    const divMonth = document.createElement('div');
    divMonth.innerText = `Month: ${coursesElement.monthDuration}`;
    divMonth.classList.add('divMonth');

    const divHour = document.createElement('div');
    divHour.innerText = `Hours: ${coursesElement.hourDuration}`;
    divHour.classList.add('divHour');

    const divMH = document.createElement('div');
    divMH.classList.add('divMH');
    divMH.append(divMonth, divHour);


    const divModules = document.createElement('div');
    const ul = document.createElement('ul');
    for (const ulElement of coursesElement.modules) {
        const li = document.createElement('li');
        li.innerText = ulElement;
        ul.appendChild(li);
    }
    divModules.classList.add('divModules');
    divModules.appendChild(ul);

    divMain.append(divTittle, divMH, divModules);
    document.body.appendChild(divMain);
}