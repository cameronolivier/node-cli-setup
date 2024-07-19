#!/usr/bin/env node
import { Command } from 'commander';
// import { execa } from 'execa';
import inquirer from 'inquirer';
import { z } from 'zod';

const ProjectConfigSchema = z.object({
  projectName: z
    .string()
    .min(1)
    .max(214)
    .regex(/^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/),
  useTypeScript: z.boolean(),
  useClerk: z.boolean(),
  testingFrameworks: z.array(
    z.enum(['Jest', 'React Testing Library', 'Playwright', 'Cypress']),
  ),
});

type ProjectConfig = z.infer<typeof ProjectConfigSchema>;

async function init(projectName: string | undefined) {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      when: !projectName,
    },
    {
      type: 'confirm',
      name: 'useTypeScript',
      message: 'Do you want to use TypeScript?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'useClerk',
      message: 'Do you want to set up Clerk for authentication?',
      default: false,
    },
    {
      type: 'checkbox',
      name: 'testingFrameworks',
      message: 'Select testing frameworks:',
      choices: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'],
    },
  ]);

  const config: ProjectConfig = {
    projectName: projectName || answers.projectName,
    ...answers,
  };

  try {
    const validatedConfig = ProjectConfigSchema.parse(config);
    await setupProject(validatedConfig);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Invalid configuration:');
      error.errors.forEach((err) => {
        console.error(`- ${err.path.join('.')}: ${err.message}`);
      });
    } else {
      console.error('An unexpected error occurred:', error);
    }
    process.exit(1);
  }
}

async function setupProject(config: ProjectConfig) {
  console.log('Setting up project with configuration:', config);
  // Implement your project setup logic here
}

const program = new Command();

program
  .name('morph')
  .description(
    'MORPH (MOHARA Rapid Project Helper) is a CLI tool designed to streamline the process of setting up new projects at MOHARA. It builds upon the Create T3 App or Create T3 Turbo App and adds our company-specific configurations and preferences.',
  )
  .version('0.1.0')
  .argument('[project-name]', 'Name of the project')
  .action(init);

program.parse(process.argv);
