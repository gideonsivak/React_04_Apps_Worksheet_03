// 1. title, author, description ஆகிய 3 Props-ஐ உள்ளீடாகப் பெறுகிறோம்
function BookCard({ title, author, description }) {
  
  // 2. கார்டுக்கான CSS Styles அடங்கிய Object-ஐ உருவாக்குகிறோம்
  const cardStyle = {
    backgroundColor: '#F5D6D6',      // கார்டின் பின்னணி நிறம் (லேசான ரோஸ்)
    color: '#1A1A1A',                // உரையின் நிறம் (கருப்பு)
    padding: '24px',                 // கார்டின் உள்ளே இருக்கும் இடைவெளி
    borderRadius: '12px',            // கார்டின் ஓரங்களை வளைக்க (Rounded corners)
    width: '240px',                  // கார்டின் அகலம்
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // 3D நிழல் (Shadow) விளைவு
    textAlign: 'left',               // உரைகளை இடதுபக்கம் சீரமைக்க
    transition: 'transform 0.3s ease, boxShadow 0.3s ease', // அனிமேஷனை மென்மையாக்க
    cursor: 'pointer',               // மவுஸைக் கொண்டு செல்லும்போது கை குறி காட்ட
    display: 'flex',                 // Flexbox அமைப்பைப் பயன்படுத்த
    flexDirection: 'column',         // கூறுகளை செங்குத்தாக (மேலிருந்து கீழ்) அடுக்க
    justifyContent: 'space-between', // கூறுகளுக்கு இடையே சீரான இடைவெளி அளிக்க
    borderLeft: '5px solid #E57373'  // இடதுபக்கம் சிவப்பில் ஒரு ஸ்டைலிஷ் கோடு அமைக்க
  };

  // 3. திரையில் காட்டப்பட வேண்டிய HTML வடிவத்தை (JSX) திருப்பி அனுப்புகிறோம்
  return (
    <div 
      style={cardStyle} // மேலே எழுதிய Styling-ஐ இந்த div-க்கு அளிக்கிறோம்
      
      // மவுஸ் கார்டு மேல் வரும்போது கார்டை லேசாக மேலே உயர்த்தும் Effect
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'; // 8px மேலே உயர்த்தும்
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)'; // நிழலை அதிகமாக்கும்
      }}
      
      // மவுஸ் கார்டை விட்டு வெளியேறும்போது பழைய நிலைக்குக் கொண்டுவரும் Effect
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'; // இயல்பு நிலைக்குக் கொண்டுவரும்
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // பழைய நிழல் அளவு
      }}
    >
      <div>
        {/* 4. Props-ல் இருந்து வந்த புத்தகத் தலைப்பை (title) H3 டேக்கில் காட்டுகிறோம் */}
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem', color: '#000000' }}>
          {title}
        </h3>
        
        {/* 5. Props-ல் இருந்து வந்த ஆசிரியர் பெயரை (author) p டேக்கில் காட்டுகிறோம் */}
        <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#4A4A4A' }}>
          <strong style={{ color: '#000000' }}>Author:</strong> {author}
        </p>
      </div>

      {/* 6. Props-ல் இருந்து வந்த கதையின் சுருக்கத்தை (description) p டேக்கில் காட்டுகிறோம் */}
      <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5', color: '#333333' }}>
        {description}
      </p>
    </div>
  );
}

// 7. இந்த BookCard Component-ஐ மற்ற கோப்புகளில் பயன்படுத்த எக்ஸ்போர்ட் செய்கிறோம்
export default BookCard;