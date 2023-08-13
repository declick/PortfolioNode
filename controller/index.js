import axios from 'axios';

const indexController = async (req, res) => {
  try {
    // Récupérez les projets GitHub à l'aide d'Axios
    const response = await axios.get('https://api.github.com/users/declick/repos');
    const githubProjects = response.data.map(repo => ({
      title: repo.name,
      description: repo.description,
      image: "/header.jpg", 
      link: repo.html_url,
    }));

    res.render('index', { projects: githubProjects }); 
  } catch (error) {
    console.error('Erreur lors de la récupération des projets depuis GitHub :', error);
    res.status(500).send('Erreur serveur');
  }
};

export default indexController;
