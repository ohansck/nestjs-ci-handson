## CI
    Build and Unit tests
        [Install, Build, Test]

    Dockerize application
        Get credentials
        Login to ECR
        Build and tag image

    Smoke Test and push image
        Smoke test
        Push image    

## CD
    (Already existing environment, immutable infrastructure)
    
    Detect changes to CI artifact (Image repo)
    Trigger a Blue/Green deployment
    Tranfer traffic 10% per minute
    Delete original infrastructure
    Complete deployment

    On failure, rollback to previous successful deployment
    

[Follow through for creating codedeploy to ecs](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-ecs-ecr-codedeploy.html#tutorials-ecs-ecr-codedeploy-taskdefinition)