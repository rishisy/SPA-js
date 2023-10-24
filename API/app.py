from flask import Flask, request, jsonify
import subprocess
app = Flask(__name__)

@app.route('/execute-command', methods=['POST'])
def execute_command():
    if request.method == 'POST':
        data = request.get_json()




        command = data.get('command')
        try:
            result = subprocess.check_output(command, shell=True, text=True)
        except subprocess.CalledProcessError as e:
            result = e.output





        return jsonify({'result': result})
    else:
        # get pe apni api chlegi hi nahi
        return jsonify({'error': 'Invalid request method'}), 400

if __name__ == '__main__':
    app.run(debug=True)
