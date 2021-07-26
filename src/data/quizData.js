

const quizData = e => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formDataObject = Object.fromEntries(formData);
    let formDataObjectKeys = Object.keys(formDataObject);

    return formDataObjectKeys;
};

export default quizData;