'''
Steps to creating a PR:

1. Create a new branch (random branch name)
2. Create a documentation page for the uploaded module
3. Update the links in the config file
4. Create a PR
'''

from io import TextIOWrapper
import os
import sys
import random
from enum import Enum
import requests


Categories = Enum('Categories', ['GRAPHICS', 'MISCELLANEOUS', 'PERIPHERALS', 'SIGNAL-PROCESSING'])


def create_branch(title: str):
    branch_name = f"new-module/{title.strip().replace(' ', '_').lower()}-{''.join(random.choices('abcdefghijklmnopqrstuvwxyz', k=10))}"
    os.system(f'git checkout -b {branch_name}')

    return branch_name


def create_markdown_file(category: Categories, title: str, description: str, how_it_works: str, code: str):
    filename = title.replace(' ', '_').lower() + ".md"
    if os.path.exists("my-website/docs/" + category.name.lower() + filename): # need to change this to ensure correct directory
        raise FileExistsError(f"The file '{filename}' already exists.")

    markdown_content = f"""
# {title}

## Description 
{description}

## How it Works
{how_it_works}

## Code
```systemverilog
{code}
```
"""
    
    with open(f"my-website/docs/{category.name.lower()}/{filename}", 'w') as file:
        file.write(markdown_content)

    print(f"Markdown file '{filename}' created successfully.")

    return markdown_content


def create_pr(branch_name, module_name, markdown_content):
    os.system('git commit -am "Added new module"')
    os.system('git push origin HEAD')

    url = 'https://api.github.com/repos/amidthestars/DAVelopers-Catalog/pulls'
    token = os.getenv('DAVELOPER_CATALOG_GITHUB_TOKEN')
    ''' format of request:
    curl -L \
        -X POST \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer <YOUR-TOKEN>" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/repos/OWNER/REPO/pulls \
        -d '{"title":"Amazing new feature","body":"Please pull these awesome changes in!","head":"octocat:new-feature","base":"master"}'
        '''
    
    headers = {
        'Authorization': f'Bearer {token}',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
    }
    body = {
        "head": branch_name,
        "base": "main",
        'title': f'IP Catalog Contribution: {module_name}',
        'body': f'''This PR adds a new module to the IP catalog. The contents of the markdown file are given below:

---

{markdown_content}
'''
    }

    response = requests.post(url, headers=headers, json=body)

    if response.status_code == 201:
        print('PR created successfully.')
    else:
        print(f'Error creating PR: {response.text}')

if __name__ == '__main__':
    module_name = 'Color Composition'
    module_category = Categories.GRAPHICS
    module_description = 'This module takes in 3 colors and outputs the resultant color from blending them.'
    module_how_it_works = 'It doesn\'t work.'

    branch_name = create_branch(module_name)
    print('Branch created successfully')
    
    code_file = open('my-website/modules/color_composition.sv', 'r')
    markdown_content = create_markdown_file(
        module_category,
        module_name,
        module_description,
        module_how_it_works,
        code_file.read()
    )

    create_pr(branch_name, module_name, markdown_content)
    
    sys.exit(0)