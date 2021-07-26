
const data = e => {
    e.preventDefault();

    const data = new FormData(e.target);

    const category = data.get('category');
    const question = data.get('question');
    const answer = data.get('answer');
    const level = data.get('level');

    const payload = { category, question, answer, level };
    console.log(payload, 'Sended');
    return { payload };
};


export default data;