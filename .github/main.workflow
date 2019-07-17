workflow "Commit Push" {
  on = "push"
  resolves = ["nexmo/github-actions/submodule-auto-pr@master"]
}

action "nexmo/github-actions/submodule-auto-pr@master" {
  uses = "nexmo/github-actions/submodule-auto-pr@master"
  secrets = ["GH_ADMIN_TOKEN"]
  env = {
    PR_TARGET_ORG = "nexmo"
    PR_TARGET_REPO = "nexmo-developer"
    PR_SUBMODULE_PATH = ".repos/nexmo/nexmo-node-code-snippets"
    PR_BRANCH_NAME = "automated-node-snippets-update"
    PR_TITLE = "nexmo-node-code-snippets Update"
    PR_TARGET_BRANCH = "master"
    PR_ACTIVE_BRANCH = "master"
  }
}
