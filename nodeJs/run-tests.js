const path = require('path');
const { exec } = require('child_process');

const featureFilePath = path.join(__dirname, 'features', 'test-survey.feature');

const stepsFilePath = path.join(__dirname, 'step', 'survey.steps.js');

const command = `cucumber-js ${featureFilePath} --require ${stepsFilePath}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Ошибка при выполнении тестов: ${error}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
