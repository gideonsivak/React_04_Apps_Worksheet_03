// 1. நாம் உருவாக்கிய BookCard Component-ஐ இங்கே இறக்குமதி (Import) செய்கிறோம்
import BookCard from "./BookCard";

// 2. App-லிருந்து அனுப்பப்படும் 'books' என்ற Array-ஐ Props-ஆகப் பெறுகிறோம்
function BookList({ books }) {
  
  // 3. கார்டுகளைத் திரையில் பக்கவாட்டில் (Horizontal Grid) அழகாக அடுக்க Flexbox Styling
  const containerStyle = {
    display: 'flex',            // கார்டுகளை ஒரே வரிசையில் பக்கவாட்டில் வைக்கிறது
    gap: '24px',                // கார்டுகளுக்கு இடையே 24px இடைவெளி தருகிறது
    justifyContent: 'center',    // திரையின் நடுவில் சீரமைக்கிறது (Center alignment)
    flexWrap: 'wrap',           // திரை சிறிதானால் கார்டுகள் அடுத்த வரிசைக்குத் தானாக இறங்கும்
    marginTop: '40px',          // மேலே இருந்து 40px இடைவெளி
    padding: '0 20px'           // இடது மற்றும் வலது ஓரங்களில் 20px இடைவெளி
  };

  return (
    <div style={containerStyle}>
      {/* 4. map() லூப் பயன்படுத்தி, 'books' Array-ல் உள்ள ஒவ்வொரு புத்தகத்தையும் 
          BookCard Component-ஆக மாற்றுகிறோம் */}
      {books.map((book, index) => (
        <BookCard 
          key={index}                // React-க்கு ஒவ்வொரு கார்டையும் அடையாளம் காண ஒரு தனித்துவமான Key
          title={book.title}          // புத்தகத் தலைப்பை Prop-ஆக அனுப்புகிறோம்
          author={book.author}        // எழுதியவர் பெயரை Prop-ஆக அனுப்புகிறோம்
          description={book.description} // கதையின் சுருக்கத்தை Prop-ஆக அனுப்புகிறோம்
        />
      ))}
    </div>
  );
}

// 5. இந்த BookList Component-ஐ மற்ற கோப்புகளில் பயன்படுத்த எக்ஸ்போர்ட் செய்கிறோம்
export default BookList;