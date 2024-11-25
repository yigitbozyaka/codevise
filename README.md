# AI PR Code Reviewer

- With the help of ollama models, you can easily get reviews from AI on your PR's.

## How to use?

- Copy and paste ```action.yml``` and ```.github/workflows/code_review.yaml``` in your repository.

- In repository settings go to Secrets and variables > Actions and in the secrets tab add OLLAMA_ADDRESS secret and for the value put the link of your ollama server.

- After that you are ready to use! Just create a pull request and get the AI reviews.

## Additional features

- You can also chat with the ai by mentioning it in the comments of your PR.

- Example usage: ```@codevise review this ...```

### Example

![Example](https://i.ibb.co/gPhSt1t/img.png)

###