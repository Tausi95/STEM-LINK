# Contribution Guidelines

Thank you for considering contributing to STEM-LINK! To maintain a high-quality project, we ask that you follow these guidelines when contributing.

## Setting Up the Development Environment
1. **Clone the Repository**  
   Use the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/Tausi95/STEM-LINK.git
   ```

2. **Install Dependencies**  
   Navigate to the project directory and install the necessary dependencies. Depending on the project structure, this might involve:
   ```bash
   cd STEM-LINK
   npm install
   ```
   Or, if you're using Python:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up a Virtual Environment (Optional)**  
   It's good practice to work within a virtual environment for Python projects:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

4. **Run the Application**  
   Follow the instructions in the README to run the application locally.

## Submitting Pull Requests
1. **Branching Strategy**  
   - Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name  # For a new feature
   git checkout -b fix/your-bug-name  # For bug fixes
   ```

2. **Make Your Changes**  
   Implement your changes, ensuring they follow the guidelines below.

3. **Commit Your Changes**  
   Write a clear commit message:
   ```bash
   git commit -m "Add a brief description of the changes made"
   ```

4. **Push Your Changes**  
   Push your changes to your fork:
   ```bash
   git push origin your-branch-name
   ```

5. **Create a Pull Request**  
   Navigate to the original repository and create a pull request from your branch. Provide a clear description of the changes and why they are needed.

## Code Standards
- Follow established coding standards and conventions.
- Ensure your code is well-documented with comments where necessary.
- Write unit tests for new features and ensure existing tests pass.
- Keep your code clean and readable.

## Reporting Issues
- If you encounter a bug or have a feature request, please open an issue in the GitHub Issues tab. Provide:
  - A clear title and description of the issue.
  - Steps to reproduce the issue, if applicable.
  - Any relevant screenshots or logs.

Thank you for contributing to STEM-LINK! Your efforts help us improve the project for everyone.