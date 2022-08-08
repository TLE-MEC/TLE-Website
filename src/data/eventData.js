const eventData = [
  {
    id: 1,
    name: 'CallByValue',
    desc: 'An Instagram IGTV Series consisting of xMECians and their experience with DSA & CP released on Instagram. The speakers for this series included Aswin M Prabhu from Linkedin, Farha Kareem from Amazon, Prince Mathew from DE Shaw and Srividya Krishnakumar from Google.',
    image: 'https://drive.google.com/uc?id=1lj8vcOeqkexBG4tlGw7cZEBHfEU4Abu_',
    dialog_img: 'https://drive.google.com/uc?id=1Bo-BepwSzOym7h1sCLtep7WLZk3d52E7',
    date: '18th Sept 2021',
    youtube:'',
    github: '',
    participants: 20,
    leaderboard: []
  },
  {
    id: 2,
    name: 'Hacktoberfest Weekend',
    desc: 'TLE MEC collaborated with FOSSMEC and MACS to organize a workshop on Git & Github. A Github repository was created to encourage open source contributions while learning DSA and this repository had a total of 171 stars, 273 forks, 650 merged pull requests and 236 contributors.',
    image: 'https://drive.google.com/uc?id=1HrarUGEMS6DbUu0wp18ifPdg5mzrLDgp',
    dialog_img: 'https://drive.google.com/uc?id=1hX2YxScW1TcHfaAekOu3gfUNt8KFe8om',
    date: '2nd Oct 2021',
    youtube: 'https://www.youtube.com/watch?v=6679UV9xOuQ&t=1301s',
    github: 'https://github.com/TLE-MEC/Hack-CP-DSA',
    participants: 20,
    leaderboard: []
  },
  {
    id: 3,
    name: 'Hello World ',
    desc: 'The first official and inaugural session of TLE MEC, Hello World was conducted to introduce students to CP and DSA by going over their merits as well as walking them through some basic problems.',
    image: 'https://drive.google.com/uc?id=1O2bHvGaBd9fkCwToikCVNsRJ-_YFVY3U',
    dialog_img: 'https://drive.google.com/uc?id=1exoOLCHw-dnFxvnJ3fJkcdwdiBdKSr0v',
    date: '11th Dec 2021',
    youtube: 'https://youtu.be/9CkYcdIjK3A',
    github: '',
    participants: 20,
    leaderboard: []
  },
  {
    id: 4,
    name: 'CodeSprint Contests',
    desc: 'A series of coding contests conducted in collaboration with MACS, with two tracks for participants to choose from - beginner and intermediate, conducted on the platform Hackerearth. The preliminary contests were one hour long and the advanced contests were 2.5 hours long.',
    image: 'https://drive.google.com/uc?id=17dTkz8yAOqi-eEOmxjG6oxUor6BmYjt_',
    dialog_img: 'https://drive.google.com/uc?id=1Iu1cyNSzwpxDdIgZwTvMqptFhkjefyhV',
    date: '15th Dec 2021',
    youtube: 'https://youtube.com/playlist?list=PLXgac_DZMistQX5DxSfn16OXMxHUy1882',
    github: '',
    participants: 20,
    leaderboard: [
      {
        id: 1,
        title: 'Beginner',
        first: {
          name: 'Christopher Roy',
          image: 'https://drive.google.com/uc?id=1AEOEXOdNIJLpj-Kw8yoxz89mM0XMZqa_'
        },
        second: {
          name: 'Aneena Prince',
          image: 'https://drive.google.com/uc?id=1OyOuuH6VxDVnjRYYR0xaAbW5HiBx5fQA'
        },
        third: {
          name: 'Adam Oomen Jacob',
          image: 'https://drive.google.com/uc?id=1EmS5priCdq24nk699ydo59In_qxoiF9j'
        },
      },
      {
        id: 2,
        title: 'Intermediate',
        first: {
          name: 'Parth Sarathi Bhunia',
          image: 'https://drive.google.com/uc?id=1OunKbc9M_5uVXoW2bFCWgQKGj4BePnJE'
        },
        second: {
          name: 'Arya Jayadev K M',
          image: 'https://drive.google.com/uc?id=1UZvmmMk285Q3mIW7jjJK9hMvZ5bHXY5y'
        },
        third: {
          name: 'George Mathew',
          image: 'https://drive.google.com/uc?id=1rwEHUdhNAVEb1b0jYe2NTP9StsKxvZOk'
        },
      },
    ]
  },
  {
    id: 5,
    name: 'DS404 Sessions',
    desc: 'TLE MEC collaborated with the Training Cell to organize a series of four events covering the basic data structures and algorithm topics. The sessions were on Algorithm Analysis, Arrays, Stacks & Queues.',
    image: 'https://drive.google.com/uc?id=1jA_dBAyYyt_fAqL4RWY-V0gLHn91S7bL',
    dialog_img: 'https://drive.google.com/uc?id=1T6-kjqKYKv-Mlt8DDDj-hNEMNcrHR8Gm',
    date: '18th Jan 2022',
    youtube: '',
    github: '',
    participants: 20,
    leaderboard: []
  },
  {
    id: 6,
    name: 'O(zone)',
    desc: 'O(zone) was a pair coding contest held by TLE MEC in collaboration with Github. The winners were awarded T-shirts sponsored by Github. ',
    image: 'https://drive.google.com/uc?id=1qzazDlZJqljh75PrUoPME59AClA8MBlg',
    dialog_img: 'https://drive.google.com/uc?id=1SAu9Lkx3gixEmnNaInbwTYOgHG-6ybtV',
    date: '14th Feb 2022',
    youtube: '',
    github: '',
    participants: 20,
    leaderboard: [
      {
        id: 1,
        title: '',
        prize: [
          {
            name: 'Adam Oomen Jacob',
            image: 'https://drive.google.com/uc?id=1EmS5priCdq24nk699ydo59In_qxoiF9j'
          },
          {
            name: 'Mathew Davis',
            image: 'https://drive.google.com/uc?id=1CnhHvAUhPuieIRFCN3XaezoFN-yTuuNO'
          },
        ]
      },
    ]
  },
  {
    id: 7,
    name: 'Code Conundrum',
    desc: '',
    image: 'https://drive.google.com/uc?id=1qzazDlZJqljh75PrUoPME59AClA8MBlg',
    dialog_img: 'https://drive.google.com/uc?id=1q3uqFJt4zFUg9oTKSf4e5uwkhz5QsF8A',
    date: '9th July 2022',
    youtube: '',
    github: '',
    participants: 60,
    leaderboard: []
  },
  {
    id: 8,
    name: 'Global Pointers',
    desc: '',
    image: 'https://drive.google.com/uc?id=1qzazDlZJqljh75PrUoPME59AClA8MBlg',
    dialog_img: 'https://drive.google.com/uc?id=1ZVqrQoPqZ27w2ZurlVaklRc48n_K4QzA',
    date: '11th July 2022',
    youtube: '',
    github: '',
    participants: 60,
    leaderboard: []
  },
]; 


export default eventData;