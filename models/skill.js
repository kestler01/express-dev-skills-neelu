
const skills =[
    {id: 10, skill: 'python', expert: true},
    {id: 20, skill: 'java', expert: false},
    {id: 30, skill: 'node', expert: true},
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
	skill.id = Date.now() % 1000000
	skill.expert = false
	skills.push(skill)
}

function deleteOne(id) {
	id = parseInt(id)

	const idx = skills.findIndex(skill => skill.id === id)
	skills.splice(idx, 1)
}


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}