// 1. React நூலகத்திலிருந்து State-ஐ நிர்வகிக்க உதவும் useState என்ற Hook-ஐ இறக்குமதி செய்கிறோம்
import { useState } from 'react';

// 2. CounterProject என்ற பிரதான Component செயல்பாட்டை (Function Component) வரையறுக்கிறோம்
function CounterProject() {
  
  // 3. count என்ற நிலையை (State Variable) உருவாக்குகிறோம், இதன் ஆரம்ப மதிப்பு (Initial Value) 0 ஆகும்
  // 4. setCount என்பது count-ன் மதிப்பை மாற்றுவதற்கான செயல்பாட்டுச் சார்பு (Setter Function) ஆகும்
  const [count, setCount] = useState(0);

  // 5. 3 பொத்தான்களுக்கும் பொதுவான CSS வடிவமைப்பு (Styling Object) அமைப்பை வரையறுக்கிறோம்
  const buttonStyle = {
    // 6. பொத்தானின் உட்புற இடைவெளி (Top/Bottom 8px, Left/Right 16px)
    padding: '8px 16px',
    // 7. பொத்தான்களுக்கு இடையிலான வெளிப்புற இடைவெளி (Left/Right 6px)
    margin: '0 6px',
    // 8. பொத்தான் உரை எழுத்தின் அளவு (Font Size)
    fontSize: '0.9rem',
    // 9. பொத்தான் உரையை தடித்த எழுத்தாக்குகிறோம் (Bold Text)
    fontWeight: 'bold',
    // 10. பொத்தான் உரையின் நிறத்தை வெள்ளையாக அமைக்கிறோம்
    color: '#ffffff',
    // 11. பொத்தானைச் சுற்றியுள்ள இயல்பான எல்லைக் கோட்டை (Border) நீக்குகிறோம்
    border: 'none',
    // 12. பொத்தானின் நான்கு மூலைகளையும் 6px அளவிற்கு வளைக்கிறோம் (Border Radius)
    borderRadius: '6px',
    // 13. சுட்டியை (Cursor) பொத்தானின் மேல் கொண்டு செல்லும்போது கை குறியீடாக மாற்றுகிறோம்
    cursor: 'pointer'
  };

  // 14. பயனர் திரையில் காண வேண்டிய JSX அமைப்பைத் திருப்பி அனுப்புகிறோம்
  return (
    // 15. மையத்தில் சீரமைக்கப்பட்ட (Center Aligned) பிரதான கொள்கலன் (Container Div)
    <div style={{ textAlign: 'center', padding: '10px 0' }}>
      
      {/* 16. தற்போதைய எண்ணிக்கையைக் காட்டும் தலைப்பு உரை (Dark Theme-க்கு ஏற்ப #f8fafc ஆக மாற்றப்பட்டது) */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#f8fafc' }}>
        {/* 17. நிலையிலிருந்து (State) பெறப்பட்ட count மதிப்பை பிரகாசமான நீல நிறத்தில் (#38bdf8) திரையிடுகிறோம் */}
        Current Count: <span style={{ color: '#38bdf8', fontSize: '1.5rem', fontWeight: 'bold' }}>{count}</span>
      </h3>

      {/* 18. 3 பொத்தான்களையும் உள்ளடக்கிய கொள்கலன் (Button Container) */}
      <div>
        
        {/* 19. எண்ணிக்கையை 1 அதிகரிக்கும் பச்சை நிற Increment பொத்தான் */}
        <button 
          // 20. பொதுவான buttonStyle உடன் பச்சை நிற பின்னணியைச் சேர்க்கிறோம் (Spread Operator)
          style={{ ...buttonStyle, backgroundColor: '#10b981' }}
          // 21. பொத்தானைக் கிளிக் செய்யும்போது count மதிப்பை +1 அதிகரிக்கிறோம்
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        {/* 22. எண்ணிக்கையை 1 குறைக்கும் சிவப்பு நிற Decrement பொத்தான் */}
        <button 
          // 23. பொதுவான buttonStyle உடன் சிவப்பு நிற பின்னணியைச் சேர்க்கிறோம்
          style={{ ...buttonStyle, backgroundColor: '#ef4444' }}
          // 24. பொத்தானைக் கிளிக் செய்யும்போது count மதிப்பை -1 குறைக்கிறோம்
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        {/* 25. எண்ணிக்கையை மீண்டும் 0-க்கு மாற்றும் சாம்பல் நிற Reset பொத்தான் */}
        <button 
          // 26. பொதுவான buttonStyle உடன் சாம்பல் நிற பின்னணியைச் சேர்க்கிறோம்
          style={{ ...buttonStyle, backgroundColor: '#64748b' }}
          // 27. பொத்தானைக் கிளிக் செய்யும்போது count மதிப்பை 0 ஆக மாற்றுகிறோம்
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

// 28. இந்த CounterProject Component-ஐ பிற கோப்புகளில் இறக்குமதி செய்து பயன்படுத்த வசதியாக ஏற்றுமதி செய்கிறோம்
export default CounterProject;