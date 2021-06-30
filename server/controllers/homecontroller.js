const index = (req, res) => {
  res.render('home/index', {
    title: 'Express',
  });
};


const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola Campeon de la Fullstack Web',
  });
};
const about = (req, res) => {
  res.render('home/about', { title: 'Acerca de projnotes' });
};

export default {
  index,
  greeting,
  about,
};
