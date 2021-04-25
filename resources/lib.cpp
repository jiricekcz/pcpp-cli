#include <Python.h>
static PyMethodDef functions[] = {
    {
        NULL,
    },
};
static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "${moduleName}",
    "[INSERT MODULE DOCS HERE]",
    -1,
    functions};
PyMODINIT_FUNC PyInit_${moduleName}(void)
{
    return PyModule_Create(&module);
}


// INSERT CODE HERE

#define exp __declspec(dllexport)
extern "C"
{
    exp const char *test() { return "test"; }
    // METHOD DEFINITION FOR PYTHON INTERFACE
}