import Cards from "./components/card/Cards";
import styles from './components/card/Cards.module.css'
// import Navbar from "./components/navbar/Navbar";
// import style from "./components/navbar/Navbar.module.css"

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.bing.com/th/id/OIP.lMlehYqlWlrzobTtzJ6fpAHaHa?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=222&h=152&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.XsZfT61yMNN0f4QX81_oFAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.cVXCF9S5AW0BVqiQ7UOkdQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2m",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.bj7qr_2cjrmyQNavbkoPgwHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.L2hrSecYDzkSSaEdx4NnqQHaEK?w=186&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.5lvK2esigr_VFcouzvNhwQHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.7wF76mX0WOm9KvCzd5JtGwHaEK?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Salesforce",
    datePosted: "10 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Oracle",
    datePosted: "5 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$47/hr",
    location: "Bangalore, India",
  },
    {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Ashfaq",
    datePosted: "5 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$47/hr",
    location: "Bangalore, India",
  },
];

  return (
    <div className={styles.parent}>
      {jobOpenings.map((elem, index) => {
        return (
          <Cards
            key={index}
            img={elem.brandLogo}
            company={elem.companyName}
            post={elem.post}
            date={elem.datePosted}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
      
      
    </div>
  );
};

export default App;