
import './App.css';

import Canwas from './componenents/Canwas'

function App() {
 
  const Data = [
    { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    }
    , { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    }
    , { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    }
    , { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    },
    { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    },
    { 
      name: "Alice", 
      age: 25, 
      score: 85, 
      rank: 1, 
      experience: 3,  // Years of experience
      projects: 5,    // Number of projects completed
      tasksCompleted: 150 // Total tasks completed
    },
    { 
      name: "Bob", 
      age: 30, 
      score: 90, 
      rank: 2, 
      experience: 5, 
      projects: 8, 
      tasksCompleted: 200 
    },
    { 
      name: "Charlie", 
      age: 22, 
      score: 78, 
      rank: 3, 
      experience: 1, 
      projects: 2, 
      tasksCompleted: 50 
    },
    { 
      name: "Diana", 
      age: 27, 
      score: 88, 
      rank: 4, 
      experience: 4, 
      projects: 6, 
      tasksCompleted: 180 
    },
    { 
      name: "Eve", 
      age: 24, 
      score: 92, 
      rank: 5, 
      experience: 2, 
      projects: 4, 
      tasksCompleted: 120 
    }
  ];
  

  return (
    <div className="App">
        {/* //<Main tableData={Data}></Main> */}
        <div style={styles.container}>
      <p style={styles.text}>
        Crafted with ❤️ by <strong>Choudhary__Bheru</strong>
      </p>
    </div>
        <Canwas></Canwas>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderTop: "1px solid #ccc",
  },
  text: {
    fontSize: "16px",
    color: "#333",
  },
};
export default App;
