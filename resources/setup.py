import setuptools

${moduleName} = setuptools.Extension(
        "${moduleName}",
        sources=["./${moduleName}_module.cpp"]
)
setuptools.setup(
    name="${moduleName}",
    version="1.0",
    author="jiricekcz",
    license="MIT",
    ext_modules=[${moduleName}],
    packages=["${moduleName}"]
)