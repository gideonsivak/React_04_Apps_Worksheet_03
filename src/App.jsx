// 1. Project 1-ற்கான BookList கூறினை (Component) அதற்கான போல்டரிலிருந்து இறக்குமதி (Import) செய்கிறோம்
import BookList from './Project1_BookList/BookList';

// 2. Project 2-ற்கான CounterProject கூறினை (Component) அதற்கான போல்டரிலிருந்து இறக்குமதி (Import) செய்கிறோம்
import CounterProject from './Project2_Counter/CounterProject';

// 3. Project 3-ற்கான ToggleProject கூறினை (Component) அதற்கான போல்டரிலிருந்து இறக்குமதி (Import) செய்கிறோம்
import ToggleProject from './Project3_Toggle/ToggleProject';

// 4. Project 4-ற்கான GithubProject கூறினை (Component) அதற்கான போல்டரிலிருந்து இறக்குமதி (Import) செய்கிறோம்
import GithubProject from './Project4_Github/GithubProject';

// 3. பயன்பாட்டின் முதன்மை செயலி கூறுகளான (Main App Component) செயல்பாட்டை (Function) வரையறுக்கிறோம்
function App() {

  // 4. Project 1-ல் திரையிடப்பட வேண்டிய 3 புத்தகங்களின் தரவுகள் அடங்கிய JavaScript Array of Objects-ஐ உருவாக்குகிறோம்
  const booksData = [
    {
      // 5. முதல் புத்தகத்தின் தலைப்பு (Title)
      title: "To Kill a Mockingbird",
      // 6. முதல் புத்தகத்தின் ஆசிரியர் பெயர் (Author)
      author: "Harper Lee",
      // 7. முதல் புத்தகத்தின் கதைக் சுருக்கம் (Description)
      description: "A novel set in the American South during the 1930s."
    },
    {
      // 8. இரண்டாவது புத்தகத்தின் தலைப்பு
      title: "1984",
      // 9. இரண்டாவது புத்தகத்தின் ஆசிரியர் பெயர்
      author: "George Orwell",
      // 10. இரண்டாவது புத்தகத்தின் கதைக் சுருக்கம்
      description: "A dystopian novel set in a totalitarian regime."
    },
    {
      // 11. மூன்றாவது புத்தகத்தின் தலைப்பு
      title: "The Great Gatsby",
      // 12. மூன்றாவது புத்தகத்தின் ஆசிரியர் பெயர்
      author: "F. Scott Fitzgerald",
      // 13. மூன்றாவது புத்தகத்தின் கதைக் சுருக்கம்
      description: "A novel depicting the Jazz Age and the American Dream."
    }
  ];

  // 14. ஒவ்வொரு திட்டப் பிரிவையும் (Project Section) சுற்றி அமைக்கும் வெண்மை நிறப் பெட்டிக்கான (White Card Box) Styling Object
  const cardBoxStyle = {
    // 15. பெட்டியின் பின்னணி நிறத்தை அடர் கார்டு வண்ணமாக (#1e293b) அமைக்கிறோம்
    backgroundColor: '#1e293b',
    // 16. பெட்டியின் நான்கு மூலைகளையும் 12px அளவிற்கு வளைக்கிறோம் (Border Radius)
    borderRadius: '12px',
    // 17. பெட்டியின் உள்புறத்தில் (Inside Padding) 24px இடைவெளி தருகிறோம்
    padding: '24px',
    // 18. அடுத்த பெட்டிக்கு இடையே கீழே 30px இடைவெளி (Bottom Margin) தருகிறோம்
    marginBottom: '30px',
    // 19. பெட்டிக்கு லேசான 3D நிழல் விளைவை (Box Shadow) சேர்க்கிறோம்
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    // 20. பெட்டியைச் சுற்றி மெல்லிய சாம்பல் நீல நிறக் கோடு (Border) அமைக்கிறோம்
    border: '1px solid #334155',
    // 21. பெட்டிக்குள் இருக்கும் உரைகளின் (Text Color) நிறத்தை வெளிர் வண்ணமாக அமைக்கிறோம்
    color: '#f8fafc'
  };

  // 22. ஒவ்வொரு திட்டப் பிரிவின் தலைப்பிற்கான (Section Header) Styling Object
  const sectionHeaderStyle = {
    // 23. தலைப்பு எழுத்தின் அளவை (Font Size) 1.4rem ஆக அமைக்கிறோம்
    fontSize: '1.4rem',
    // 24. தலைப்பு எழுத்தின் நிறத்தை பளிச்சின வெள்ளை நிறமாக அமைக்கிறோம்
    color: '#f1f5f9',
    // 25. தலைப்பிற்கு கீழே 20px இடைவெளி அளிக்கிறோம்
    marginBottom: '20px',
    // 26. தலைப்பின் இடதுபக்கத்தில் 4px தடிமனுள்ள பிரகாசமான ஆகாய நீல நிறக் கோடு அமைக்கிறோம்
    borderLeft: '4px solid #38bdf8',
    // 27. இடதுபக்க நீலக் கோட்டிற்கும் எழுத்திற்கும் இடையே 12px இடைவெளி அளிக்கிறோம்
    paddingLeft: '12px'
  };

  // 28. பயனர் திரையில் காண வேண்டிய JSX அமைப்பைத் திருப்பி அனுப்புகிறோம் (Return)
  return (
    // 29. ஒட்டுமொத்தப் பக்கத்திற்கான நவீன அடர் பின்னணி (#0f172a) மற்றும் முழு திரை உயரம் (100vh)
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 30. பக்கத்தின் உள்ளடக்கங்களை நடுவில் (Center Align) சீரமைக்க உதவும் பிரதான கொள்கலன் (Main Container) */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* 31. பயன்பாட்டின் பிரதான முதன்மைத் தலைப்பு (Master Application Header) */}
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#f8fafc', fontSize: '2.2rem' }}>
          React 04
        </h1>

        {/* 32. திட்டம் 1 (Project 1: Book List Application)க்கான பிரத்யேகக் பிரிவு */}
        <div style={cardBoxStyle}>
          {/* 33. திட்டம் 1-ன் துணைத் தலைப்பு */}
          <h2 style={sectionHeaderStyle}>Project 1: Book List Application</h2>
          {/* 34. BookList Component-க்கு புத்தகங்களின் தரவை (booksData) Prop ஆக அனுப்பி இயக்குகிறோம் */}
          <BookList books={booksData} />
        </div>

        {/* 35. திட்டம் 2 (Project 2: Simple Counter Application)க்கான பிரத்யேகக் பிரிவு */}
        <div style={cardBoxStyle}>
          {/* 36. திட்டம் 2-ன் துணைத் தலைப்பு */}
          <h2 style={sectionHeaderStyle}>Project 2: Simple Counter Application</h2>
          {/* 37. CounterProject Component-ஐ இங்கு அழைத்து இயக்குகிறோம் */}
          <CounterProject />
        </div>

        {/* 38. திட்டம் 3 (Project 3: Toggle Display Application)க்கான பிரத்யேகக் பிரிவு */}
        <div style={cardBoxStyle}>
          <h2 style={sectionHeaderStyle}>Project 3: Toggle Display Application</h2>
          <ToggleProject />
        </div>

        {/* 39. திட்டம் 4 (Project 4: GitHub User Data Fetcher)க்கான பிரத்யேகக் பிரிவு */}
        <div style={cardBoxStyle}>
          <h2 style={sectionHeaderStyle}>Project 4: GitHub User Data Fetcher</h2>
          <GithubProject />
        </div>

      </div>
    </div>
  );
}

// 38. இந்த App Component-ஐ main.jsx கோப்பில் இயக்கும் பொருட்டு முதன்மையாக ஏற்றுமதி (Export Default) செய்கிறோம்
export default App;