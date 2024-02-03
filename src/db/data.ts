import PeopleSchema from '../models/peopleSchema'

const peopleData = [
  {
    "id": '1',
    "category": "entertainment",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706917920/people/rov7y3ppyysgdphfejlg.jpg",
    "votes": { "positive": 23, "negative": 36 },
    "name": "Kanye West",
    "lastUpdated": "2020-03-10T23:08:57.892Z",
    "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists."
  },
  {
    "id": '2',
    "category": "business",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706912673/people/d3rat0osgurkhm7sga12.jpg",
    "votes": { "positive": 418, "negative": 324 },
    "name": "Mark Zuckerberg",
    "lastUpdated": "2021-02-14T23:10:19.134Z",
    "description": "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004."
  },
  {
    "id": '3',
    "category": "politics",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706912673/people/svga2powvqpptdhxsblg.jpg",
    "votes": { "positive": 45, "negative": 97 },
    "name": "Cristina Fernández de Kirchner",
    "lastUpdated": "2020-12-10T23:41:07.120Z",
    "description": "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected."
  },
  {
    "id": '4',
    "category": "politics",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706912673/people/a0t36x4fcrsr7jtq0l2w.jpg",
    "votes": { "positive": 18, "negative": 3 },
    "name": "Malala Yousafzai",
    "lastUpdated": "2020-12-10T23:41:07.120Z",
    "description": "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region."
  },
  {
    "id": '5',
    "category": "business",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706912673/people/qk4ysiq87aeozu3bipuo.jpg",
    "votes": { "positive": 1237, "negative": 894 },
    "name": "Elon Musk",
    "lastUpdated": "2020-12-20T23:43:38.041Z",
    "description": "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer."
  },
  {
    "id": '6',
    "category": "environment",
    "picture": "https://res.cloudinary.com/dzttogpsi/image/upload/v1706912673/people/ffpt0jdrmx1vlultnppv.jpg",
    "votes": { "positive": 118, "negative": 45 },
    "name": "Greta Thumberg",
    "lastUpdated": "2021-02-26T23:44:50.326Z",
    "description": "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint."
  }
]

// peopleData.forEach(async (peopleData) => {
//   try {
//     const person = new PeopleSchema(peopleData);

//     await person.save();
//     console.log('Person inserted successfully:', person);
//   } catch (error: any) {
//     console.error('Error inserting person:', error.message);
//   }
// });
export default peopleData
