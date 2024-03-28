import { awscdk } from 'projen';

const cdkVersion = '2.110.1';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matteo Giani',
  authorAddress: 'matteo.giani.87@gmail.com',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  minNodeVersion: '18.16.1',
  jsiiVersion: '~5.0.0',
  name: 'dms-patterns',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/MarcDuQuesne/dms-patterns',
  deps: [],
  publishToPypi: {
    distName: 'dms-patterns',
    module: 'dms_patterns',
  },
  description: 'L3-level cdk constructs for DMS',
  devDeps: ['eslint-plugin-cdk', 'cdk-nag'],
  peerDeps: [],
  packageName: 'dms-patterns',
  gitignore: [
    'cdk.out',
    '*.js',
    '*.d.ts',
    'test/microsoftsqlserver.test.ts'
  ],
});

project.eslint?.addPlugins('cdk');
project.eslint?.addRules({
  'cdk/construct-ctor': 'error',
  'cdk/construct-props-struct-name': 'error',
  // 'cdk/filename-match-regex': 'error',  // TODO: enable
  'cdk/public-static-property-all-caps': 'error',
  'cdk/no-static-import': 'error',
  'cdk/stack-props-struct-name': 'error',
  'cdk/prefer-type-only-imports': 'error',
});

project.synth();
