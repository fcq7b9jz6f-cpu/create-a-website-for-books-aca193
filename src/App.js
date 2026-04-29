import React, { useState } from 'react';

const BOOKS = [
  {
    id: 1,
    title: "مقدّمة ابن خلدون",
    author: "ابن خلدون",
    category: "فلسفة وتاريخ",
    description: "يعتبر هذا الكتاب مؤسس علم الاجتماع، حيث يستعرض فيه ابن خلدون أحوال البشر وطبائعهم والعمران البشري.",
    price: "45.00 ر.س",
    cover: "https://images.unsplash.com/photo-1544648151-1868351f7478?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "حي بن يقظان",
    author: "ابن طفيل",
    category: "رواية فلسفية",
    description: "قصة رمزية فريدة تتحدث عن تطور العقل البشري والبحث عن الحقيقة واكتشاف وجود الخالق من خلال التأمل.",
    price: "32.00 ر.س",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "نقد العقل المحض",
    author: "إيمانويل كانط",
    category: "فلسفة",
    description: "أحد أهم الكتب في تاريخ الفلسفة الغربية، يبحث في حدود المعرفة الإنسانية وكيفية إدراكنا للعالم.",
    price: "60.00 ر.س",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "البداية والنهاية",
    author: "ابن كثير",
    category: "تاريخ",
    description: "موسوعة تاريخية ضخمة تبدأ من بداية الخلق حتى أحداث القرن الثامن الهجري.",
    price: "120.00 ر.س",
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400"
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = BOOKS.filter(book => 
    book.title.includes(searchTerm) || book.author.includes(searchTerm)
  );

  return (
    <div className="container" dir="rtl">
      <header className="header">
        <div className="logo">مكتبة النور</div>
        <nav className="nav">
          <a href="#">الرئيسية</a>
          <a href="#">الأكثر مبيعاً</a>
          <a href="#">من نحن</a>
        </nav>
      </header>

      <section className="hero">
        <h1>اكتشف عالم المنسوج بحبر العقول</h1>
        <p>رحلتك القادمة تبدأ من بين صفحات كتاب. تصفح مجموعتنا المختارة من كنوز الأدب والفلسفة.</p>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="ابحث عن كتاب أو مؤلف..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <main className="book-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-image">
              <img src={book.cover} alt={book.title} />
              <span className="category-tag">{book.category}</span>
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="description">{book.description}</p>
              <div className="footer-card">
                <span className="price">{book.price}</span>
                <button className="buy-btn">أضف للسلة</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>جميع الحقوق محفوظة © 2024 مكتبة النور</p>
      </footer>
    </div>
  );
}