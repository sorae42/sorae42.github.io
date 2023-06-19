#include <iostream>
#include <fstream>
#include <vector>

using namespace std;


vector<int> getDirectLinks(const vector<vector<int>>& graph, int web);
vector<int> getAllLinks(const vector<vector<int>>& graph, int web);

int main() {

    ifstream file("graph.txt");
    int n;
    file >> n;


    vector<vector<int>> graph(n, vector<int>(n, 0));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            file >> graph[i][j];
        }
    }

    file.close();


    int k = 0;
    vector<int> directLinks = getDirectLinks(graph, k);
    cout << "Cac trang web co the link truc tiep tu trang web " << k << ": ";
    for (int i = 0; i < directLinks.size(); i++) {
        cout << directLinks[i] << " ";
    }
    cout << endl;


    int x = 0;
    vector<int> allLinks = getAllLinks(graph, x);
    cout << "Cac trang web ma trang web " << x << " co the link truc tiep hoac gian tiep: ";
    for (int i = 0; i < allLinks.size(); i++) {
        cout << allLinks[i] << " ";
    }
    cout << endl;

    return 0;
}


vector<int> getDirectLinks(const vector<vector<int>>& graph, int web) {
    vector<int> directLinks;
    for (int i = 0; i < graph[web].size(); i++) {
        if (graph[web][i] == 1) {
            directLinks.push_back(i);
        }
    }
    return directLinks;
}


vector<int> getAllLinks(const vector<vector<int>>& graph, int web) {
    vector<int> allLinks;
    vector<bool> visited(graph.size(), false);
    visited[web] = true;

    for (int i = 0; i < graph[web].size(); i++) {
        if (graph[web][i] == 1 && !visited[i]) {
            visited[i] = true;
            vector<int> links = getAllLinks(graph, i);
            allLinks.insert(allLinks.end(), links.begin(), links.end());
        }
    }

    for (int i = 0; i < visited.size(); i++) {
        if (visited[i] && i != web) {
            allLinks.push_back(i);
        }
    }

    return allLinks;
}