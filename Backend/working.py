import PyPDF2, textract
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import glob
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
import string
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import os

def extract_text():
    files = glob.glob(r"C:\Developement\collegeProjectBackend\TestDocuments\*.pdf")
    text_list = []
    for file in files:
        #open allows you to read the file
        pdfFileObj = open(file, 'rb')

        #The pdfReader variable is a readable object that will be parsed
        pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

        #discerning the number of pages will allow us to parse through all the pages
        num_pages = pdfReader.numPages
        count = 0
        text = ""


        #The while loop will read each page
        while count < num_pages:
            pageObj = pdfReader.getPage(count)
            count += 1
            text += pageObj.extractText()


        #This if statement exists to check if the above library returned #words.
        # It's done because PyPDF2 cannot read scanned files.
        if text != "":
            text = text

        # #If the above returns as False, we run the OCR library textract to #convert scanned/image based PDF files into text
        else:
            text = use_ocr(file)
        
        text_list.append(text)
        pdfFileObj.close()

    return text_list

def use_ocr(file):
    return 0

def clean_text(text_list):
    new_text_list = []
    for text in text_list:
        tokens = word_tokenize(text)
        tokens = [w.lower() for w in tokens]
        stop_words = set(stopwords.words('english'))
        table = str.maketrans('', '', string.punctuation)
        stripped = [w.translate(table) for w in tokens]
        words = [word for word in stripped if word.isalpha()]
        words = [w for w in words if not w in stop_words]
        text = ' '.join(words)
        new_text_list.append(text)
    return new_text_list

def check_similarity(text_list):
    vectorizer = TfidfVectorizer()
    vector_matrix = vectorizer.fit_transform(text_list)
    # print(vector_matrix.shape)
    similarity = cosine_similarity(vector_matrix[0], vector_matrix[1])[0][0]
    if similarity < 0.4:
        return 'Unsimilar Documents'
    elif similarity < 0.7:
        return 'Somewhat Similar Documents'
    else:
        return 'Similar Documents'

def delete_files():
    files = glob.glob(r"C:\Developement\collegeProjectBackend\TestDocuments\*.pdf")
    for file in files:
        os.remove(file)

def main():
    text_list = extract_text()
    text_list = clean_text(text_list)
    delete_files()
    return check_similarity(text_list)

if __name__ == "__main__":
    print(main())
    # delete_files(files)
