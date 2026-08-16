// 1. React-ல் இருந்து State மற்றும் Side Effects-ஐ (API அழைப்புகள் போன்றவை) நிர்வகிக்க 'useState', 'useEffect' ஆகிய Hook-களை இறக்குமதி (Import) செய்கிறோம்.
import { useState, useEffect } from 'react';

// 2. Project 4-ற்கான GithubProject எனும் முதன்மை கூறுச் சார்பை (Component Function) வரையறுக்கிறோம்.
function GithubProject() {

  // 3. GitHub பயனர்களின் தரவைச் சேமிக்க 'users' எனும் நிலை மாறியையும் (State Variable), அதை மாற்றியமைக்க 'setUsers' எனும் செயல்பாட்டுச் சார்பையும் உருவாக்குகிறோம் (ஆரம்பத்தில் காலி Array).
  const [users, setUsers] = useState([]);

  // 4. API-ல் இருந்து தரவு பதிவிறக்கம் ஆகும் வரை 'Loading' திரையைக் காட்டுவதற்கு 'loading' எனும் நிலை மாறியையும், 'setLoading' எனும் சார்பையும் உருவாக்குகிறோம் (ஆரம்பத்தில் true).
  const [loading, setLoading] = useState(true);

  // 5. Component திரையில் தோன்றும் போது (Mounting Phase) ஒருமுறை மட்டும் API-ஐ அழைப்பதற்கு useEffect எனும் Hook-ஐப் பயன்படுத்துகிறோம்.
  useEffect(() => {

    // 6. GitHub API முகவரியிலிருந்து 8 பயனர்களின் தரவை 'fetch' கட்டளை மூலம் பெறுகிறோம்.
    fetch('https://api.github.com/users?per_page=8')

      // 7. API-லிருந்து வந்த பதிலை (Response) JavaScript-க்கு புரியும் JSON வடிவத்திற்கு மாற்றுகிறோம்.
      .then(response => response.json())

      // 8. வெற்றிகரமாக தரவு கிடைத்ததும், அதைப் பெற்று 'setUsers' மூலம் users State-ல் சேமிக்கிறோம்.
      .then(data => {
        setUsers(data);

        // 9. தரவு வந்துவிட்டதால், Loading திரையை மறைக்க setLoading-ஐ 'false' என மாற்றுகிறோம்.
        setLoading(false);
      })

      // 10. ஏதேனும் பிழை (Error) நடந்தால் அதை Console-ல் பதிவு செய்து, Loading திரையை மறைக்கிறோம்.
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });

  // 11. useEffect-ன் கடைசி வாதமான '[]' (Dependency Array) காலியாக இருப்பதால், இந்த செயல்பாடு Component முதன்முதலில் திரையில் தோன்றும் போது மட்டுமே ஒருமுறை இயங்கும்.
  }, []); 

  // 12. 'loading' மதிப்பு true ஆக இருந்தால், அதாவது தரவு இன்னும் வந்து சேரவில்லை என்றால் 'Loading GitHub Users...' எனும் உரையை மட்டும் திரையில் காட்டுகிறோம்.
  if (loading) return <p style={{ color: '#38bdf8' }}>Loading GitHub Users...</p>;

  // 13. தரவு வெற்றிகரமாக வந்து சேர்ந்த பிறகு, திரையில் காட்ட வேண்டிய UI வடிவமைப்பிற்கான JSX அமைப்பைத் திருப்பி அனுப்புகிறோம்.
  return (
    /* 14. பயனர் கார்டுகளை அடுக்கடுக்காக (Grid Layout) அமைக்க, CSS Grid-ஐப் பயன்படுத்தி ஒவ்வொரு கார்டையும் 200px அளவிற்கு அமைக்கிறோம். */
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
      
      {/* 15. 'users' Array-ல் உள்ள ஒவ்வொரு பயனர் தரவையும் '.map()' செய்து தனித்தனி Card-களாக மாற்றுகிறோம். */}
      {users.map(user => (
        
        /* 16. ஒவ்வொரு பயனர் கார்டுக்கும் ஒரு தனித்துவமான 'key' (user.id) வழங்குகிறோம் (React-ல் List Render செய்ய இது கட்டாயம்). */
        <div key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', backgroundColor: '#0f172a', border: '1px solid #334155' }}>
          
          {/* 17. பயனரின் முகப் படத்தை (Avatar Image) 'src' மூலம் பெற்று, அதை வட்ட வடிவில் (50% Border Radius) காட்டுகிறோம். */}
          <img src={user.avatar_url} alt={user.login} style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
          
          {/* 18. பயனரின் பெயர் மற்றும் ப்ரொபைல் லிங்க் அடங்கிய பகுதி. */}
          <div>
            {/* 19. பயனரின் GitHub பயனர் பெயரை (Username) இங்கே காட்டுகிறோம். */}
            <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#f8fafc' }}>{user.login}</h4>
            
            {/* 20. பயனரின் GitHub ப்ரொபைல் பக்கத்திற்குச் செல்லும் Link-ஐ உருவாக்குகிறோம். 'target="_blank"' மூலம் இதை புதிய டேபில் (New Tab) திறக்கச் செய்கிறோம். */}
            <a href={user.html_url} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#38bdf8', textDecoration: 'none' }}>View Profile</a>
          </div>
        </div>
      ))}
    </div>
  );
}

// 21. இந்த Component-ஐ App.jsx போன்ற பிற கோப்புகளில் இறக்குமதி செய்து பயன்படுத்த வசதியாக ஏற்றுமதி (Export Default) செய்கிறோம்.
export default GithubProject;