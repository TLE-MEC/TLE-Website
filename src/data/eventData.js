import helloworld2 from '../assets/png/helloworld2.0.jpeg';
import helloworld2card from '../assets/png/helloworld2.0card.jpeg';
const eventData = [
  {
    id: 1,
    isUpcoming:false,
    name: 'CallByValue',
    desc: 'An Instagram IGTV Series consisting of xMECians and their experience with DSA & CP released on Instagram. The speakers for this series included Aswin M Prabhu from Linkedin, Farha Kareem from Amazon, Prince Mathew from DE Shaw and Srividya Krishnakumar from Google.',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110628/TLE%20Website/Events/CallByValue_e0nubs.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110754/TLE%20Website/Events/Events%20Dialog/callbyvalue_j19nhx.png',
    date: '18th Sept 2021',
    youtube: '',
    github: '',
    participants: 100,
    leaderboard: []
  },
  {
    id: 2,
    isUpcoming:false,
    name: 'Hacktoberfest Weekend',
    desc: 'TLE MEC collaborated with FOSSMEC and MACS to organize a workshop on Git & Github. A Github repository was created to encourage open source contributions while learning DSA and this repository had a total of 171 stars, 273 forks, 650 merged pull requests and 236 contributors.',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/hacktoberfest_rytjer.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110755/TLE%20Website/Events/Events%20Dialog/hacktoberfest_hegktu.png',
    date: '2nd Oct 2021',
    youtube: 'https://www.youtube.com/watch?v=6679UV9xOuQ&t=1301s',
    github: 'https://github.com/TLE-MEC/Hack-CP-DSA',
    participants: 40,
    leaderboard: []
  },
  {
    id: 3,
    isUpcoming:false,
    name: 'Hello World ',
    desc: 'The first official and inaugural session of TLE MEC, Hello World was conducted to introduce students to CP and DSA by going over their merits as well as walking them through some basic problems.',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110630/TLE%20Website/Events/Hello_World_jhubgh.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110755/TLE%20Website/Events/Events%20Dialog/helloworld_ht0il3.png',
    date: '11th Dec 2021',
    youtube: 'https://youtu.be/9CkYcdIjK3A',
    github: '',
    participants: 120,
    leaderboard: []
  },
  {
    id: 4,
    isUpcoming:false,
    name: 'CodeSprint Contests',
    desc: 'A series of coding contests conducted in collaboration with MACS, with two tracks for participants to choose from - beginner and intermediate, conducted on the platform Hackerearth. The preliminary contests were one hour long and the advanced contests were 2.5 hours long.',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/Codesprint_d9lyao.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110754/TLE%20Website/Events/Events%20Dialog/codesprint_z56ci2.png',
    date: '15th Dec 2021',
    youtube: 'https://youtube.com/playlist?list=PLXgac_DZMistQX5DxSfn16OXMxHUy1882',
    github: '',
    participants: 150,
    leaderboard: [
      {
        id: 1,
        title: 'Beginner',
        first: {
          name: 'Christopher Roy',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/Christopher_Roy_nxekuj.jpg'
        },
        second: {
          name: 'Aneena Prince',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/Aneena_Prince_oau92y.jpg'
        },
        third: {
          name: 'Adam Oomen Jacob',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/Adam_Oomen_Jacob_n7wy2a.jpg'
        },
      },
      {
        id: 2,
        title: 'Intermediate',
        first: {
          name: 'Parth Sarathi Bhunia',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110843/TLE%20Website/Events/Winners/Parth_Sarathi_Bhunia_ef8wxg.jpg'
        },
        second: {
          name: 'Arya Jayadev K M',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/Arya_Jayadev_wisxnk.jpg'
        },
        third: {
          name: 'George Mathew',
          image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/George_Mathew_bbxndo.jpg'
        },
      },
    ]
  },
  {
    id: 5,
    isUpcoming:false,
    name: 'DS404 Sessions',
    desc: 'TLE MEC collaborated with the Training Cell to organize a series of four events covering the basic data structures and algorithm topics. The sessions were on Algorithm Analysis, Arrays, Stacks & Queues.',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/DS404_cfr1mh.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110754/TLE%20Website/Events/Events%20Dialog/ds404_lakekk.png',
    date: '18th Jan 2022',
    youtube: 'https://youtube.com/playlist?list=PLXgac_DZMissDO7Vo9iGP4kLAG6mMRNAW',
    github: '',
    participants: 20,
    leaderboard: []
  },
  {
    id: 6,
    isUpcoming:false,
    name: 'O(zone)',
    desc: 'O(zone) was a pair coding contest held by TLE MEC in collaboration with Github. The winners were awarded T-shirts sponsored by Github. ',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/Ozone_cqgjre.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110755/TLE%20Website/Events/Events%20Dialog/ozone_iuw5ok.png',
    date: '14th Feb 2022',
    youtube: '',
    github: '',
    participants: 40,
    leaderboard: [
      {
        id: 1,
        title: '',
        prize: [
          {
            name: 'Adam Oomen Jacob',
            image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110842/TLE%20Website/Events/Winners/Adam_Oomen_Jacob_n7wy2a.jpg'
          },
          {
            name: 'Mathew Davis',
            image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110843/TLE%20Website/Events/Winners/Mathew_Davis_ozcmwd.jpg'
          },
        ]
      },
    ]
  },
  {
    id: 7,
    isUpcoming:false,
    name: 'Code Conundrum',
    desc: 'Code Conundrum was a 2 hour-long programming contest, with questions ranging all difficulty levels and covering all major topics of DSA',
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/CodeConundrum_wzn3cn.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110754/TLE%20Website/Events/Events%20Dialog/codeconundrum_rcmecs.png',
    date: '9th July 2022',
    youtube: '',
    github: '',
    participants: 60,
    leaderboard: []
  },
  {
    id: 8,
    isUpcoming:false,
    name: 'Global Pointers',
    desc: "When it comes to gathering tips on how to prepare for and present yourself in interviews, who better to ask than those who've been there and done that? For the first session of Global Pointers, TLE MEC brings to you, Srividya Krishnakumar, a Software Engineer at Google and an xMECian from the Batch of 2021.",
    image: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110629/TLE%20Website/Events/GlobalPointers_mx1o7w.png',
    dialog_img: 'https://res.cloudinary.com/dpt7fy6g5/image/upload/v1660110755/TLE%20Website/Events/Events%20Dialog/globalpointers_isay0a.png',
    date: '11th July 2022',
    youtube: '',
    github: '',
    participants: 100,
    leaderboard: []
  },
  {
    id: 9,
    name: "Hello World 2.0",
    isUpcoming:true,
    desc: "TLE MEC is all set to introduce you to DSA and CP and equip you for placements, job opportunities and upskilling through HELLO WORLD 2.0. Be with us on 2nd of November to kickstart the journey. And yesss, we do have a platform to show-off you and your efforts into the real WORLD!",
    image:
      helloworld2card,
    dialog_img:
      helloworld2,
    date: "2nd Nov 2022",
    youtube: "",
    github: "",
    leaderboard: [],
  },
];


export default eventData;