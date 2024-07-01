document.getElementById('fortune-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthday = document.getElementById('birthday').value;
    const greekLetter = document.getElementById('greek-letter').value;

    const personalityTraits = {
        'aries': 'あなたは情熱的で冒険心があります。',
        'taurus': 'あなたは実直で信頼性があります。',
    };

    const subjects = {
        'alpha': ['数学', '物理', '化学'],
        'beta': ['文学', '歴史', '哲学'],
        'gamma': ['生物', '地理', '芸術'],
        'delta': ['音楽', '美術', '体育'],
        'epsilon': ['経済', '政治', '社会学'],
        'zeta': ['心理学', '教育学', '言語学'],
        'eta': ['工学', '情報学', 'デザイン'],
        'theta': ['法律', '経営学', '会計学'],
        'iota': ['環境学', '農学', '森林学'],
        'kappa': ['建築学', '土木工学', '都市計画'],
        'lambda': ['天文学', '宇宙科学', '気象学'],
        'mu': ['薬学', '看護学', '保健学'],
        'nu': ['海洋学', '地球科学', '地質学'],
        'xi': ['物質科学', '材料工学', 'ナノテクノロジー'],
        'omicron': ['音響学', '光学', '電磁気学'],
        'pi': ['理論物理学', '実験物理学', '応用物理学'],
        'rho': ['統計学', 'データサイエンス', '機械学習'],
        'sigma': ['生物医学', '生物工学', 'バイオインフォマティクス'],
        'tau': ['機械工学', '航空宇宙工学', 'ロボティクス'],
        'upsilon': ['古典文学', '哲学', '考古学'],
        'phi': ['芸術史', '文化研究', '民族学'],
        'chi': ['言語学', '翻訳学', '通訳学'],
        'psi': ['心理学', '精神医学', 'カウンセリング'],
        'omega': ['宗教学', '神学', '倫理学']
    };

    const zodiac = getZodiacSign(birthday);
    const personality = personalityTraits[zodiac] || '独特な性格の持ち主です。';
    const favoriteSubject = subjects[greekLetter][Math.floor(Math.random() * subjects[greekLetter].length)];

    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('personality').textContent = `性格診断: ${personality}`;
        document.getElementById('favorite-subject').textContent = `好きな教科: ${favoriteSubject}`;
        document.getElementById('result').style.display = 'block';
    }, 5000);
});

function getZodiacSign(birthday) {
    const date = new Date(birthday);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return 'aries';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return 'taurus';
    }
    return 'unknown';
}
