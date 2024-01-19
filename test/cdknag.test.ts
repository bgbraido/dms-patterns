import * as cdk from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { Postgres2S3Stack } from './stacks';

const app = new cdk.App();
let postgres2S3 = new Postgres2S3Stack(app, 'S32Rds');

describe('Nag Warnings', () => {

  test.each([postgres2S3])('Nag Warnings for %p', (stack) => {
    cdk.Aspects.of(stack).add(new AwsSolutionsChecks({ verbose: true }));

    NagSuppressions.addStackSuppressions(stack, [
      {
        id: 'AwsSolutions-S1',
        reason: 'S3 bucket is used for testing purposes',
      },
      {
        id: 'AwsSolutions-S10',
        reason: 'S3 bucket is used for testing purposes',
      },
    ]);

    const warnings = Annotations.fromStack(stack).findWarning(
      '*',
      Match.stringLikeRegexp('AwsSolutions-.*'),
    );
    expect(warnings).toHaveLength(0);
  });
});

describe('Nag Errors', () => {

  test.each([
    { stack: new Postgres2S3Stack(new cdk.App(), 'S32Rds') },
  ])('Nag Errors for %p', ({ stack }) => {
    cdk.Aspects.of(stack).add(new AwsSolutionsChecks({ verbose: true }));

    NagSuppressions.addStackSuppressions(stack, [
      {
        id: 'AwsSolutions-S1',
        reason: 'S3 bucket is used for testing purposes',
      },
      {
        id: 'AwsSolutions-S10',
        reason: 'S3 bucket is used for testing purposes',
      },
    ]);

    const errors = Annotations.fromStack(stack).findError(
      '*',
      Match.stringLikeRegexp('AwsSolutions-.*'),
    );
    expect(errors).toHaveLength(0);
  });

});
