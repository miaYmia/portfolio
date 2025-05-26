// Getting the portfolio section from the HTML document
const projectsSection = document.getElementById('portfolio');

// Defining the projects data
// Each object represents a project with various details
// Including image source, title, type, description, technologies used, and the source link
// Example project is described below
const projects = [
  {
    img: {
      src: './img/titanic.png',
      alt: 'titanic',
    },
    title: 'Trading Strategy Simulator',
    type: ['Python & Finance'],
    description: 'Interactive trading simulator that visualizes buy/sell signals using moving average crossover logic on real-time stock data. A fun project that combines data, finance and product thinking.',
    technologies: ['Streamlit', 'Plotly', 'SQLite', 'Alpha Vantage API', 'Pandas', 'Trading Strategy'],
    source: 'https://github.com/miaYmia/trading-strategy-simulator',
  },
  {
    img: {
      src: './img/titanic.png',
      alt: 'titanic',
    },
    title: 'Would you have survived the Titanic?',
    type: ['Machine Learning Project'],
    description: 'Can you predict who would survive the Titanic disaster? This project uses machine learning to analyze factors like age, class, and family relationships to predict survival, using techniques like data preprocessing and model evaluation to achieve accurate results.',
    technologies: ['EDA', 'Data Pre-processing', 'Data Visualization', 'Logistic Regression','Decision Tree'],
    source: 'https://github.com/miaYmia/ML_Projects/blob/main/titanic-survivor-prediction/titanic_project.ipynb',
  },
  {
    img: {
      src: './img/house.png',
      alt: 'correlation heatmap',
    },
    title: 'Your Home\'s Worth: A Machine Learning Forecast',
    type: ['Machine Learning Project'],
    description: 'This project dives into the world of data science to predict house prices. By analyzing factors like square footage, number of bedrooms, and location, we\'ve built a machine learning model that can accurately estimate property values.',
    technologies: ['EDA', 'Machine Learning Models', 'Data Preprocessing', 'Feature Engineering', 'Scikit-Learn', 'Pandas'],
    source: 'https://github.com/miaYmia/ML_Projects/blob/main/house-price-prediction/House_Price_Prediction.ipynb',
  },
  {
    img: {
      src: './img/rpnCalculator.jpg',
      alt: 'rpn Calculator',
    },
    title: 'Reverse Polish notation Calculator',
    type: ['Programming'],
    description: 'Ever wondered how calculators work behind the scenes? This project builds a Reverse Polish Notation (RPN) calculator in Java. RPN is a different way to write mathematical expressions, and it\'s pretty cool!',
    technologies: ['Java'],
    source: 'https://github.com/miaYmia/Java_Projects/tree/main/RPNCalculator/src',
  },
  {
    img: {
      src: './img/binarytree.png',
      alt: 'BInary Search Tree',
    },
    title: 'Binary Search Tree',
    type: ['Programming'],
    description: 'This project builds a Binary Search Tree (BST) in Java, a data structure that organizes data in a hierarchical way. The BST allows for efficient searching, insertion, and deletion of elements. This project explores different ways to traverse the tree, giving us a practical understanding of binary trees.',
    technologies: ['Java'],
    source: 'https://github.com/miaYmia/Java_Projects/tree/main/Binary%20Search%20Tree',
  },
  
  
];

// Function to generate a list of items from an array
const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li class="project_detail">${element}</li>`, '');

// Function to generate HTML code for a card representing a project
const generateCard = (project, id) => `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
          ${generateList(project.type)}
        </ul>
        <p class="project__description">${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <div class="btn-container">
          <a href="${project.source}" target="_blank">
          <button id=${id} class="project-detail btn-primary btn-outlined">See Project</button>
          </a>
        </div>
      </article>
    </section>`;

  
// Event listener to populate the projects section with cards when the window loads
// Iterating over the projects array and inserting each card into the projectsSection
window.addEventListener('load', () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML('beforeend', card);
  });
});
