import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"

const App = () => {
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661630766008-a49a883d9953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
      intro:'Lorem1',
      tag:'Satisfied'
    },
    {img:'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo=',
      intro:'',
      tag:'Underserved'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661594668193-3f105ef4ce8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'Underbanked'
    },
     {img:'https://plus.unsplash.com/premium_photo-1661777049031-ca3aaf6ec8ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      intro:'',
      tag:'Underbanked'
    },
     {img:'https://plus.unsplash.com/premium_photo-1661596852991-ca83ea8c253b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      intro:'',
      tag:'Underbanked'
    },
    
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />

    </div>
  )
}

export default App