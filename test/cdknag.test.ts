import * as cdk from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { S32RDSStack, S32S3Stack } from './stacks';

const app = new cdk.App();
let s32rds = new S32RDSStack(app, 'S32Rds');
let s32s3 = new S32S3Stack(app, 'S32S3');

describe('Nag Warnings', () => {

  test.each([s32rds, s32s3])('Nag Warnings for %p', (stack) => {
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
    { stack: new S32RDSStack(new cdk.App(), 'S32Rds') },
    { stack: new S32S3Stack(new cdk.App(), 'S32S3') },
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
