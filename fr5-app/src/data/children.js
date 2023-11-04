// Mock data for children, with a focus on individual needs, including IDD
const children = [
	// Children associated with Ava Smith (Parent ID 1)
	{
		id: 1,
		name: 'Ethan Smith',
		parentId: 1,
		briganceScores: {
			literacy: 75,
			math: 85,
			language: 80,
			cognitive: 78,
			motor: 74,
			social: 77
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Bright Future Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: efalse,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	}, {
		id: 2,
		name: 'Sophia Johnson',
		parentId: 1,
		briganceScores: {
			literacy: 90,
			math: 90,
			language: 92,
			cognitive: 88,
			motor: 85,
			social: 91
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Bright Future Elementary',
		age: 4,
		grade: 'Preschool',
		IDD: true,
		IDD_Details: {
			diagnosis: 'Autism Spectrum Disorder',
			servicesRequired: ['Occupational Therapy', 'Speech Therapy'],
		},
	}, {
		id: 3,
		name: 'Logan Taylor',
		parentId: 1,
		briganceScores: {
			literacy: 60,
			math: 70,
			language: 65,
			cognitive: 62,
			motor: 68,
			social: 64
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Bright Future Elementary',
		age: 6,
		grade: '1st Grade',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Reading Support'],
		},
	},
	// Children associated with Mia Williams (Parent ID 2)
	{
		id: 4,
		name: 'Olivia Williams',
		parentId: 2,
		briganceScores: {
			literacy: 82,
			math: 79,
			language: 85,
			cognitive: 77,
			motor: 80,
			social: 75
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Harmony Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: true,
		IDD_Details: {
			diagnosis: 'ADHD',
			servicesRequired: ['Behavioral Therapy'],
		},
	}, {
		id: 5,
		name: 'Noah Williams',
		parentId: 2,
		briganceScores: {
			literacy: 88,
			math: 90,
			language: 87,
			cognitive: 85,
			motor: 83,
			social: 86
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Harmony Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	}, {
		id: 6,
		name: 'Emma Williams',
		parentId: 2,
		briganceScores: {
			literacy: 70,
			math: 65,
			language: 72,
			cognitive: 68,
			motor: 71,
			social: 73
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Harmony Elementary',
		age: 4,
		grade: 'Preschool',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	}, {
		id: 7,
		name: 'Amelia Brown',
		parentId: 3,
		briganceScores: {
			literacy: 78,
			math: 75,
			language: 77,
			cognitive: 76,
			motor: 74,
			social: 79
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'North Franklin',
		school: 'Pioneer Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: true,
		IDD_Details: {
			diagnosis: 'Dyslexia',
			servicesRequired: ['Reading Support'],
		},
	}, {
		id: 8,
		name: 'Avery Brown',
		parentId: 3,
		briganceScores: {
			literacy: 85,
			math: 80,
			language: 83,
			cognitive: 82,
			motor: 81,
			social: 84
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'North Franklin',
		school: 'Pioneer Elementary',
		age: 6,
		grade: '1st Grade',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	}, {
		id: 9,
		name: 'Jackson Brown',
		parentId: 3,
		briganceScores: {
			literacy: 70,
			math: 72,
			language: 70,
			cognitive: 71,
			motor: 73,
			social: 69
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'North Franklin',
		school: 'Pioneer Elementary',
		age: 4,
		grade: 'Preschool',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	}, {
		id: 10,
		name: 'Isabella Martinez',
		parentId: 4,
		briganceScores: {
			literacy: 88,
			math: 84,
			language: 86,
			cognitive: 87,
			motor: 82,
			social: 80
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Inspire Elementary School',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	}, {
		id: 11,
		name: 'Mia Gonzalez',
		parentId: 4,
		briganceScores: {
			literacy: 90,
			math: 91,
			language: 88,
			cognitive: 89,
			motor: 85,
			social: 87
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Inspire Elementary School',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	},
	// Mock data for children IDs 12 through 25
	{
		id: 12,
		name: 'Charlotte Green',
		parentId: 5,
		briganceScores: {
			literacy: 82,
			math: 78,
			language: 80,
			cognitive: 79,
			motor: 81,
			social: 77
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Adventure Elementary School',
		age: 4,
		grade: 'Preschool',
		IDD: true,
		IDD_Details: {
			diagnosis: 'Dyspraxia',
			servicesRequired: ['Physical Therapy', 'Speech Therapy'],
		},
	}, {
		id: 13,
		name: 'James Wilson',
		parentId: 5,
		briganceScores: {
			literacy: 76,
			math: 73,
			language: 75,
			cognitive: 72,
			motor: 74,
			social: 70
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Adventure Elementary School',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	}, {
		id: 14,
		name: 'Harper Anderson',
		parentId: 5,
		briganceScores: {
			literacy: 89,
			math: 85,
			language: 90,
			cognitive: 87,
			motor: 86,
			social: 88
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Adventure Elementary School',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	},
	// Repeat this pattern for IDs 15 through 25
	{
		id: 15,
		name: 'Evelyn Martinez',
		parentId: 6,
		briganceScores: {
			literacy: 91,
			math: 92,
			language: 93,
			cognitive: 90,
			motor: 89,
			social: 94
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'West Franklin',
		school: 'Innovation Elementary School',
		age: 5,
		grade: 'Kindergarten',
		IDD: true,
		IDD_Details: {
			diagnosis: 'Autism Spectrum Disorder',
			servicesRequired: ['Behavioral Therapy', 'Speech Therapy'],
		},
	},
	// ...
	{
		id: 25,
		name: 'Lucas Clark',
		parentId: 8,
		briganceScores: {
			literacy: 78,
			math: 74,
			language: 76,
			cognitive: 75,
			motor: 77,
			social: 79
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'North Franklin',
		school: 'Pioneer Elementary School',
		age: 6,
		grade: '1st Grade',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Reading Support'],
		},
	}, {
		id: 12,
		name: 'Oliver Rodriguez',
		parentId: 4,
		briganceScores: {
			literacy: 82,
			math: 78,
			language: 80,
			cognitive: 79,
			motor: 81,
			social: 77
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'Central Franklin',
		school: 'Inspire Elementary School',
		age: 4,
		grade: 'Preschool',
		IDD: true,
		IDD_Details: {
			diagnosis: 'Dyspraxia',
			servicesRequired: ['Physical Therapy', 'Speech Therapy'],
		},
	},




	{
		id: 26,
		name: 'Lily Thompson',
		parentId: 8,
		briganceScores: {
			literacy: 75,
			math: 80,
			language: 77,
			cognitive: 74,
			motor: 76,
			social: 73
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'East Franklin',
		school: 'Adventure Elementary School',
		age: 6,
		grade: '1st Grade',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy', 'Reading Support'],
		},
	},


	// Children for the last parent (ID 9) before Lucas Hernandez (ID 10)
	{
		id: 27,
		name: 'Charlotte Davis',
		parentId: 9,
		briganceScores: {
			literacy: 80,
			math: 85,
			language: 82,
			cognitive: 86,
			motor: 83,
			social: 81
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'West Franklin',
		school: 'Discovery Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	},

	{
		id: 28,
		name: 'Michael Hernandez',
		parentId: 10,
		briganceScores: {
			literacy: 80,
			math: 82,
			language: 81,
			cognitive: 80,
			motor: 79,
			social: 83
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'South Franklin',
		school: 'Harmony Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: [],
		},
	},
	// Last child for example
	{
		id: 30,
		name: 'Grace Hernandez',
		parentId: 10,
		briganceScores: {
			literacy: 88,
			math: 90,
			language: 87,
			cognitive: 89,
			motor: 85,
			social: 88
		},
		state: 'Ohio',
		county: 'Franklin',
		district: 'South Franklin',
		school: 'Harmony Elementary',
		age: 5,
		grade: 'Kindergarten',
		IDD: false,
		IDD_Details: {
			diagnosis: '',
			servicesRequired: ['Speech Therapy'],
		},
	},
];

export default children;