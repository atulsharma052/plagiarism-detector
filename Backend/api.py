from flask import Flask, request, redirect, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from working import main

Upload_Folder = r"C:\Developement\collegeProjectBackend\TestDocuments"


app = Flask(__name__)
app.config['Upload_Folder'] = Upload_Folder
CORS(app)

@app.route('/check', methods=['GET', 'POST'])
def check_similarity():
    if request.method == "POST":
        all_files = request.files
        # print(all_files)
        for file in all_files.listvalues():
            file = file[0]
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['Upload_Folder'], filename))
        result = main()
    return result

app.run()